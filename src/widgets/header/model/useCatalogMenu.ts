import { useCallback, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { useDisclosure, useOutsideClick } from '@/shared/lib'
import { CATEGORIES, getCategory, useCategoryMenu } from '@/entities/category'

export function useCatalogMenu() {
  const { isOpen, toggle, close } = useDisclosure()
  const { pathname } = useLocation()
  const ref = useRef<HTMLDivElement>(null)
  const menu = useCategoryMenu()

  useOutsideClick(ref, close, isOpen)
  useEffect(close, [pathname, close])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  const open = useCallback((slug: string) => menu.open(slug), [menu])

  const activeSlug = menu.hoverSlug ?? CATEGORIES[0].slug

  return {
    ref,
    isOpen,
    toggle,
    close,
    categories: CATEGORIES,
    activeSlug,
    activeCategory: getCategory(activeSlug) ?? CATEGORIES[0],
    open,
  }
}
