import { useMemo } from 'react'
import { useCarousel } from '@/shared/ui'
import { getCategory } from '@/entities/category'
import { queryProducts } from '@/entities/product'

export function useCategoryCarousel(slug: string) {
  const category = getCategory(slug)
  const products = useMemo(() => queryProducts({ topSlug: slug, sort: 'new' }).slice(0, 8), [slug])
  const carousel = useCarousel(products.length)
  return { title: category?.title ?? '', products, carousel }
}
