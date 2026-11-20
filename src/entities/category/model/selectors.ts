import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'
import { CATEGORIES, COLLECTIONS } from './data'
import type { Category, CollectionSlug, Subcategory } from './types'

export const getCategory = (slug: string): Category | undefined => CATEGORIES.find((c) => c.slug === slug)

export const findSubcategory = (slug: string): { top: Category; sub: Subcategory } | undefined => {
  for (const top of CATEGORIES) {
    const sub = top.children.find((s) => s.slug === slug)
    if (sub) return { top, sub }
  }
  return undefined
}

export interface CatalogTarget {
  title: string
  crumbs: Crumb[]
  /** Top level category used to select products. */
  topSlug?: string
  collection?: CollectionSlug
  /** Category that is highlighted in the side menu. */
  activeTopSlug?: string
}

export const resolveCatalogTarget = (slug: string | undefined): CatalogTarget | undefined => {
  if (!slug) return undefined
  const base: Crumb[] = [{ label: 'Главная', to: ROUTES.home }]

  if (slug === 'search') {
    return { title: 'Результаты поиска', crumbs: [...base, { label: 'Результаты поиска' }] }
  }

  if (slug in COLLECTIONS) {
    const collection = slug as CollectionSlug
    return { title: COLLECTIONS[collection], collection, crumbs: [...base, { label: COLLECTIONS[collection] }] }
  }

  const top = getCategory(slug)
  if (top) {
    return {
      title: top.title,
      topSlug: top.slug,
      activeTopSlug: top.slug,
      crumbs: [...base, { label: 'Каталог', to: ROUTES.catalog }, { label: top.title }],
    }
  }

  const found = findSubcategory(slug)
  if (found) {
    return {
      title: found.sub.title,
      topSlug: found.top.slug,
      activeTopSlug: found.top.slug,
      crumbs: [
        ...base,
        { label: 'Каталог', to: ROUTES.catalog },
        { label: found.top.title, to: ROUTES.category(found.top.slug) },
        { label: found.sub.title },
      ],
    }
  }
  return undefined
}
