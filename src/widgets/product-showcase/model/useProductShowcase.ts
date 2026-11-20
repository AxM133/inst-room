import { useEffect, useMemo, useState } from 'react'
import { ROUTES } from '@/shared/config'
import { useCarousel, type TabItem } from '@/shared/ui'
import { queryProducts } from '@/entities/product'

export type ShowcaseTab = 'new' | 'sale' | 'hits'

export const SHOWCASE_TABS: TabItem<ShowcaseTab>[] = [
  { value: 'new', label: 'Новинки' },
  { value: 'sale', label: 'Акции' },
  { value: 'hits', label: 'Хиты продаж' },
]

export function useProductShowcase() {
  const [tab, setTab] = useState<ShowcaseTab>('new')
  const products = useMemo(() => queryProducts({ collection: tab, sort: tab === 'hits' ? 'popular' : 'new' }).slice(0, 20), [tab])
  const carousel = useCarousel(products.length)
  const { scrollTo } = carousel

  useEffect(() => {
    scrollTo(0)
  }, [tab, scrollTo])

  return { tab, setTab, tabs: SHOWCASE_TABS, products, carousel, allLink: ROUTES.category(tab) }
}
