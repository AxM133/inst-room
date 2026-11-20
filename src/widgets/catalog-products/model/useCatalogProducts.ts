import { useCallback, useEffect, useMemo, useState } from 'react'
import { useCatalogParams, useCatalogScope } from '@/features/catalog-filters'

export const PRODUCTS_PAGE_SIZE = 12

export function useCatalogProducts() {
  const { products, params } = useCatalogScope()
  const { update, reset } = useCatalogParams()
  const [loaded, setLoaded] = useState(1)

  const totalPages = Math.max(1, Math.ceil(products.length / PRODUCTS_PAGE_SIZE))
  const page = Math.min(params.page, totalPages)

  /* whenever filters / sorting / page change the "show more" counter starts over */
  const resetKey = useMemo(() => JSON.stringify({ ...params, page }), [params, page])
  useEffect(() => setLoaded(1), [resetKey])

  const visible = useMemo(
    () => products.slice((page - 1) * PRODUCTS_PAGE_SIZE, (page - 1 + loaded) * PRODUCTS_PAGE_SIZE),
    [products, page, loaded],
  )

  const showMore = useCallback(() => setLoaded((n) => n + 1), [])
  const setPage = useCallback((next: number) => update({ page: next }), [update])

  return {
    products: visible,
    view: params.view,
    total: products.length,
    page,
    totalPages,
    hasMore: page - 1 + loaded < totalPages,
    isEmpty: products.length === 0,
    showMore,
    setPage,
    reset,
  }
}
