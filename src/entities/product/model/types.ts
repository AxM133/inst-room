export type ProductBadge = 'new' | 'sale'
export type DeliveryKind = 'pickup' | 'courier' | 'both'
export type DeliveryFilter = 'any' | 'pickup' | 'courier'

export interface Product {
  id: string
  name: string
  weight: string
  description: string
  price: number
  oldPrice?: number
  image: string
  gallery: string[]
  badge?: ProductBadge
  inStock: boolean
  brandId: string
  country: string
  color: string
  delivery: DeliveryKind
  topSlug: string
  popularity: number
  order: number
  specs: Array<[label: string, value: string]>
}

export type SortKey = 'popular' | 'price-asc' | 'price-desc' | 'new' | 'name-asc' | 'name-desc'

export interface ProductQuery {
  topSlug?: string
  collection?: 'new' | 'sale' | 'hits'
  brandIds?: string[]
  countries?: string[]
  color?: string
  delivery?: DeliveryFilter
  priceMin?: number
  priceMax?: number
  sort?: SortKey
  search?: string
}
