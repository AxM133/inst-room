import { useCatalogScope } from '@/features/catalog-filters'

export function useBrandInfo() {
  const { brand } = useCatalogScope()
  return { brand }
}
