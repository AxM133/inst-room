import { useMemo } from 'react'
import { useParams } from 'react-router'
import { useCarousel } from '@/shared/ui'
import { getProduct, PRODUCTS, type Product } from '@/entities/product'

export function useRelatedProducts() {
  const { id } = useParams()
  const product = getProduct(id)

  return useMemo(() => {
    if (!product) return { similar: [] as Product[], together: [] as Product[] }
    const others = PRODUCTS.filter((p) => p.id !== product.id)
    return {
      similar: others.filter((p) => p.topSlug === product.topSlug).slice(0, 8),
      together: others.filter((p) => p.topSlug !== product.topSlug).slice(0, 8),
    }
  }, [product])
}

export function useProductRail(count: number) {
  return useCarousel(count)
}
