import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router'
import type { DeliveryFilter, SortKey } from '@/entities/product'

export type ViewMode = 'grid' | 'list'

export interface CatalogParams {
  sort: SortKey
  view: ViewMode
  page: number
  brandIds: string[]
  countries: string[]
  color?: string
  delivery: DeliveryFilter
  priceMin?: number
  priceMax?: number
  q: string
}

const FILTER_KEYS = ['brand', 'country', 'color', 'delivery', 'min', 'max', 'page']
const SORTS: SortKey[] = ['popular', 'price-asc', 'price-desc', 'new', 'name-asc', 'name-desc']

const toNumber = (value: string | null): number | undefined => {
  if (value === null || value === '') return undefined
  const n = Number(value)
  return Number.isFinite(n) ? n : undefined
}

const toList = (value: string | null): string[] => (value ? value.split(',').filter(Boolean) : [])

export function useCatalogParams() {
  const [search, setSearch] = useSearchParams()

  const params = useMemo<CatalogParams>(() => {
    const sort = search.get('sort') as SortKey | null
    const delivery = search.get('delivery')
    return {
      sort: sort && SORTS.includes(sort) ? sort : 'new',
      view: search.get('view') === 'list' ? 'list' : 'grid',
      page: Math.max(1, toNumber(search.get('page')) ?? 1),
      brandIds: toList(search.get('brand')),
      countries: toList(search.get('country')),
      color: search.get('color') ?? undefined,
      delivery: delivery === 'pickup' || delivery === 'courier' ? delivery : 'any',
      priceMin: toNumber(search.get('min')),
      priceMax: toNumber(search.get('max')),
      q: search.get('q') ?? '',
    }
  }, [search])

  const update = useCallback(
    (patch: Partial<CatalogParams>) => {
      const next = new URLSearchParams(search)
      const put = (key: string, value: string | undefined) => (value ? next.set(key, value) : next.delete(key))

      if ('sort' in patch) put('sort', patch.sort === 'new' ? undefined : patch.sort)
      if ('view' in patch) put('view', patch.view === 'list' ? 'list' : undefined)
      if ('brandIds' in patch) put('brand', patch.brandIds?.join(','))
      if ('countries' in patch) put('country', patch.countries?.join(','))
      if ('color' in patch) put('color', patch.color)
      if ('delivery' in patch) put('delivery', patch.delivery === 'any' ? undefined : patch.delivery)
      if ('priceMin' in patch) put('min', patch.priceMin?.toString())
      if ('priceMax' in patch) put('max', patch.priceMax?.toString())
      put('page', patch.page && patch.page > 1 ? String(patch.page) : undefined)

      setSearch(next, { replace: true })
    },
    [search, setSearch],
  )

  const reset = useCallback(() => {
    const next = new URLSearchParams(search)
    FILTER_KEYS.forEach((key) => next.delete(key))
    setSearch(next, { replace: true })
  }, [search, setSearch])

  const hasFilters = FILTER_KEYS.slice(0, -1).some((key) => search.has(key))

  return { params, update, reset, hasFilters }
}
