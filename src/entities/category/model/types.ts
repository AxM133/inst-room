export interface Subcategory {
  slug: string
  title: string
  image: string
}

export interface Category {
  slug: string
  title: string
  children: Subcategory[]
}

export type CollectionSlug = 'new' | 'sale' | 'hits'
