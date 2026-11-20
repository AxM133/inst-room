import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

export interface CarouselController {
  ref: RefObject<HTMLDivElement | null>
  canPrev: boolean
  canNext: boolean
  activeIndex: number
  count: number
  prev: () => void
  next: () => void
  scrollTo: (index: number) => void
}

const measureStep = (el: HTMLElement): number => {
  const first = el.children[0] as HTMLElement | undefined
  const second = el.children[1] as HTMLElement | undefined
  if (!first) return el.clientWidth
  return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth
}

export function useCarousel(count: number): CarouselController {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState({ canPrev: false, canNext: count > 1, activeIndex: 0 })

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return
    const step = measureStep(el) || 1
    setState({
      canPrev: el.scrollLeft > 2,
      canNext: el.scrollLeft + el.clientWidth < el.scrollWidth - 2,
      activeIndex: Math.round(el.scrollLeft / step),
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update, count])

  const scrollPage = useCallback((dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    const step = measureStep(el) || el.clientWidth
    const perPage = Math.max(1, Math.round(el.clientWidth / step))
    el.scrollBy({ left: dir * step * perPage, behavior: 'smooth' })
  }, [])

  const prev = useCallback(() => scrollPage(-1), [scrollPage])
  const next = useCallback(() => scrollPage(1), [scrollPage])

  const scrollTo = useCallback((index: number) => {
    const el = ref.current
    if (!el) return
    el.scrollTo({ left: index * measureStep(el), behavior: 'smooth' })
  }, [])

  return { ref, count, scrollTo, prev, next, ...state }
}
