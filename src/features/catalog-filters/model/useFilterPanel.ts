import { useMemo } from 'react'
import { BRANDS } from '@/entities/brand'
import { COLORS, countBy, getPriceBounds, type Product } from '@/entities/product'
import { useCatalogParams } from './useCatalogParams'

const toggleIn = (list: string[], value: string, on: boolean) =>
  on ? [...list, value] : list.filter((item) => item !== value)

export function useFilterPanel(pool: Product[], lockedBrandId?: string) {
  const { params, update, reset, hasFilters } = useCatalogParams()

  const facets = useMemo(() => {
    const [min, max] = getPriceBounds(pool)
    const brandCounts = countBy(pool, (p) => p.brandId)
    const countryCounts = countBy(pool, (p) => p.country)
    return {
      min,
      max,
      brands: BRANDS.filter((b) => brandCounts.has(b.id)).map((b) => ({ id: b.id, label: b.name, count: brandCounts.get(b.id) ?? 0 })),
      countries: [...countryCounts.entries()].sort(([a], [b]) => a.localeCompare(b, 'ru')).map(([label, count]) => ({ label, count })),
      colors: COLORS.filter((c) => pool.some((p) => p.color === c)),
    }
  }, [pool])

  const priceMin = params.priceMin ?? facets.min
  const priceMax = params.priceMax ?? facets.max

  return {
    facets,
    params,
    hasFilters,
    reset,
    price: { min: priceMin, max: priceMax },
    isBrandChecked: (id: string) => id === lockedBrandId || params.brandIds.includes(id),
    toggleBrand: (id: string, on: boolean) => update({ brandIds: toggleIn(params.brandIds, id, on) }),
    toggleCountry: (label: string, on: boolean) => update({ countries: toggleIn(params.countries, label, on) }),
    setColor: (color: string) => update({ color: params.color === color ? undefined : color }),
    setDelivery: (delivery: typeof params.delivery) => update({ delivery }),
    setPriceMin: (value: number) =>
      update({ priceMin: Math.min(value, priceMax), ...(value <= facets.min ? { priceMin: undefined } : {}) }),
    setPriceMax: (value: number) =>
      update({ priceMax: Math.max(value, priceMin), ...(value >= facets.max ? { priceMax: undefined } : {}) }),
  }
}
