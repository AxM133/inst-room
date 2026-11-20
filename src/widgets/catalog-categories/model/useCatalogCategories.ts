import { useCallback, useMemo, useState } from 'react'
import { CATEGORIES } from '@/entities/category'

export const CATALOG_PAGE_SIZE = 9

export function useCatalogCategories() {
  const [slug, setSlug] = useState(CATEGORIES[4].slug)
  const [page, setPage] = useState(1)
  const [loaded, setLoaded] = useState(1)

  const category = useMemo(() => CATEGORIES.find((c) => c.slug === slug) ?? CATEGORIES[0], [slug])
  const totalPages = Math.ceil(category.children.length / CATALOG_PAGE_SIZE)

  const items = useMemo(
    () => category.children.slice((page - 1) * CATALOG_PAGE_SIZE, (page - 1 + loaded) * CATALOG_PAGE_SIZE),
    [category, page, loaded],
  )

  const selectCategory = useCallback((next: string) => {
    setSlug(next)
    setPage(1)
    setLoaded(1)
  }, [])

  const changePage = useCallback((next: number) => {
    setPage(next)
    setLoaded(1)
  }, [])

  const showMore = useCallback(() => setLoaded((n) => n + 1), [])

  return {
    categories: CATEGORIES,
    activeSlug: slug,
    selectCategory,
    items,
    page,
    totalPages,
    hasMore: page - 1 + loaded < totalPages,
    changePage,
    showMore,
  }
}
