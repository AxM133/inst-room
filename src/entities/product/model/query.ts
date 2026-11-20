import { PRODUCTS, COLORS, COUNTRIES } from './data'
import type { Product, ProductQuery, SortKey } from './types'

export const getProduct = (id: string | undefined): Product | undefined => PRODUCTS.find((p) => p.id === id)

export const getProducts = (ids: string[]): Product[] =>
  ids.map((id) => getProduct(id)).filter((p): p is Product => Boolean(p))

export const SORT_OPTIONS: Array<{ value: SortKey; label: string }> = [
  { value: 'popular', label: 'По популярности' },
  { value: 'price-asc', label: 'По возрастанию цены' },
  { value: 'price-desc', label: 'По убыванию цены' },
  { value: 'new', label: 'Сначала новые' },
  { value: 'name-asc', label: 'От А до Я' },
  { value: 'name-desc', label: 'От Я до А' },
]

const SORTERS: Record<SortKey, (a: Product, b: Product) => number> = {
  popular: (a, b) => b.popularity - a.popularity,
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  new: (a, b) => Number(b.badge === 'new') - Number(a.badge === 'new') || a.order - b.order,
  'name-asc': (a, b) => a.name.localeCompare(b.name, 'ru'),
  'name-desc': (a, b) => b.name.localeCompare(a.name, 'ru'),
}

export const queryProducts = (query: ProductQuery = {}): Product[] => {
  const needle = query.search?.trim().toLowerCase()

  const matches = PRODUCTS.filter((p) => {
    if (query.topSlug && p.topSlug !== query.topSlug) return false
    if (query.collection === 'new' && p.badge !== 'new') return false
    if (query.collection === 'sale' && !p.oldPrice) return false
    if (query.collection === 'hits' && p.popularity < 50) return false
    if (query.brandIds?.length && !query.brandIds.includes(p.brandId)) return false
    if (query.countries?.length && !query.countries.includes(p.country)) return false
    if (query.color && p.color !== query.color) return false
    if (query.delivery && query.delivery !== 'any' && p.delivery !== 'both' && p.delivery !== query.delivery) return false
    if (query.priceMin !== undefined && p.price < query.priceMin) return false
    if (query.priceMax !== undefined && p.price > query.priceMax) return false
    if (needle && !`${p.name} ${p.weight}`.toLowerCase().includes(needle)) return false
    return true
  })

  return query.sort ? [...matches].sort(SORTERS[query.sort]) : matches
}

export const getPriceBounds = (products: Product[]): [number, number] => {
  if (!products.length) return [0, 0]
  const prices = products.map((p) => p.price)
  return [Math.min(...prices), Math.max(...prices)]
}

export const countBy = <K extends string>(products: Product[], pick: (p: Product) => K): Map<K, number> => {
  const map = new Map<K, number>()
  products.forEach((p) => map.set(pick(p), (map.get(pick(p)) ?? 0) + 1))
  return map
}

export const getCountries = () => COUNTRIES
export const getColors = () => COLORS
