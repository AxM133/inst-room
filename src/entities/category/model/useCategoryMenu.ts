import { useCallback, useEffect, useRef, useState } from 'react'

/** Hover menu with a small close delay so the pointer can travel to the fly-out. */
export function useCategoryMenu(delay = 120) {
  const [hoverSlug, setHoverSlug] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)

  const cancel = useCallback(() => window.clearTimeout(timer.current), [])

  const open = useCallback(
    (slug: string) => {
      cancel()
      setHoverSlug(slug)
    },
    [cancel],
  )

  const close = useCallback(() => {
    cancel()
    timer.current = window.setTimeout(() => setHoverSlug(null), delay)
  }, [cancel, delay])

  const closeNow = useCallback(() => {
    cancel()
    setHoverSlug(null)
  }, [cancel])

  useEffect(() => cancel, [cancel])

  return { hoverSlug, open, close, closeNow, cancel }
}
