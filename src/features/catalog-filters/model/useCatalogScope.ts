import { useMemo } from 'react'
import { useParams } from 'react-router'
import { getBrand } from '@/entities/brand'
import { resolveCatalogTarget } from '@/entities/category'
import { queryProducts, type Product } from '@/entities/product'
import { useCatalogParams } from './useCatalogParams'

/**
 * Resolves what the user is looking at (a category, a collection, a search or a brand)
 * and returns both the unfiltered pool (for filter facets) and the filtered list.
 */
export function useCatalogScope() {
  const { slug, id } = useParams()
  const { params } = useCatalogParams()

  return useMemo(() => {
    const brand = id ? getBrand(id) : undefined
    const target = slug ? resolveCatalogTarget(slug) : undefined
    const search = slug === 'search' ? params.q : undefined

    const pool: Product[] = brand
      ? queryProducts({ brandIds: [brand.id] })
      : queryProducts({ topSlug: target?.topSlug, collection: target?.collection, search })

    const products = queryProducts({
      topSlug: brand ? undefined : target?.topSlug,
      collection: brand ? undefined : target?.collection,
      search: brand ? undefined : search,
      brandIds: brand ? [brand.id] : params.brandIds,
      countries: params.countries,
      color: params.color,
      delivery: params.delivery,
      priceMin: params.priceMin,
      priceMax: params.priceMax,
      sort: params.sort,
    })

    return { brand, target, pool, products, params }
  }, [id, slug, params])
}
