import { useCallback, useMemo, useState } from 'react'
import { pluralize } from '@/shared/lib'
import { useFavorites } from '@/entities/favorites'
import { getProducts, SORT_OPTIONS, type SortKey } from '@/entities/product'

const PAGE_SIZE = 12

export function useFavoritesList() {
  const { ids } = useFavorites()
  const [sort, setSort] = useState<SortKey>('new')
  const [page, setPage] = useState(1)
  const [loaded, setLoaded] = useState(1)

  const sorted = useMemo(() => {
    const products = getProducts(ids)
    const compare: Record<SortKey, (a: (typeof products)[number], b: (typeof products)[number]) => number> = {
      popular: (a, b) => b.popularity - a.popularity,
      'price-asc': (a, b) => a.price - b.price,
      'price-desc': (a, b) => b.price - a.price,
      new: (a, b) => ids.indexOf(b.id) - ids.indexOf(a.id),
      'name-asc': (a, b) => a.name.localeCompare(b.name, 'ru'),
      'name-desc': (a, b) => b.name.localeCompare(a.name, 'ru'),
    }
    return [...products].sort(compare[sort])
  }, [ids, sort])

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)

  const changeSort = useCallback((next: SortKey) => {
    setSort(next)
    setPage(1)
    setLoaded(1)
  }, [])

  const changePage = useCallback((next: number) => {
    setPage(next)
    setLoaded(1)
  }, [])

  return {
    products: sorted.slice((safePage - 1) * PAGE_SIZE, (safePage - 1 + loaded) * PAGE_SIZE),
    countLabel: `${sorted.length} ${pluralize(sorted.length, ['товар', 'товара', 'товаров'])}`,
    isEmpty: sorted.length === 0,
    sort,
    changeSort,
    sortOptions: SORT_OPTIONS,
    page: safePage,
    totalPages,
    changePage,
    hasMore: safePage - 1 + loaded < totalPages,
    showMore: () => setLoaded((n) => n + 1),
  }
}
