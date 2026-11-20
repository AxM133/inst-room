import { SORT_OPTIONS } from '@/entities/product'
import { useCatalogParams } from '@/features/catalog-filters'

export function useCatalogToolbar() {
  const { params, update } = useCatalogParams()
  return {
    sort: params.sort,
    view: params.view,
    options: SORT_OPTIONS,
    setSort: (sort: typeof params.sort) => update({ sort }),
    setView: (view: typeof params.view) => update({ view }),
  }
}
