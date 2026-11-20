import { useState } from 'react'
import { useParams } from 'react-router'
import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'
import { getBrand } from '@/entities/brand'
import { getCategory } from '@/entities/category'
import { getProduct } from '@/entities/product'

export function useProductDetails() {
  const { id } = useParams()
  const product = getProduct(id)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) return { product: undefined, crumbs: [] as Crumb[], activeImage, setActiveImage, brand: undefined }

  const category = getCategory(product.topSlug)
  const crumbs: Crumb[] = [
    { label: 'Главная', to: ROUTES.home },
    { label: 'Каталог', to: ROUTES.catalog },
    ...(category ? [{ label: category.title, to: ROUTES.category(category.slug) }] : []),
    { label: product.name },
  ]

  return { product, crumbs, brand: getBrand(product.brandId), activeImage, setActiveImage }
}
