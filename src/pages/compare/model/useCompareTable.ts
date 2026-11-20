import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { removeFromCompare, useCompare } from '@/entities/compare'
import { getBrand } from '@/entities/brand'
import { getCategory } from '@/entities/category'
import { getProducts, type Product } from '@/entities/product'

export interface SpecRow {
  label: string
  values: string[]
  differs: boolean
}

const buildRows = (products: Product[], pick: (p: Product) => Array<[string, string]>): SpecRow[] => {
  const labels: string[] = []
  products.forEach((p) => pick(p).forEach(([label]) => !labels.includes(label) && labels.push(label)))
  return labels.map((label) => {
    const values = products.map((p) => pick(p).find(([l]) => l === label)?.[1] ?? '—')
    return { label, values, differs: new Set(values).size > 1 }
  })
}

export function useCompareTable() {
  const { ids } = useCompare()
  const products = useMemo(() => getProducts(ids), [ids])
  const [groupSlug, setGroupSlug] = useState<string | undefined>()
  const [onlyDiff, setOnlyDiff] = useState(false)
  const scroller = useRef<HTMLDivElement>(null)

  const groups = useMemo(() => {
    const slugs = [...new Set(products.map((p) => p.topSlug))]
    return slugs.map((slug) => ({ value: slug, label: getCategory(slug)?.title ?? slug }))
  }, [products])

  const active = groups.find((g) => g.value === groupSlug)?.value ?? groups[0]?.value
  const items = useMemo(() => products.filter((p) => p.topSlug === active), [products, active])

  useEffect(() => {
    if (groupSlug && !groups.some((g) => g.value === groupSlug)) setGroupSlug(undefined)
  }, [groups, groupSlug])

  const main = useMemo(() => buildRows(items, (p) => p.specs), [items])
  const extra = useMemo(
    () =>
      buildRows(items, (p) => [
        ['Бренд', getBrand(p.brandId)?.name ?? '—'],
        ['Страна', p.country],
        ['Цвет', p.color],
        ['Вес', p.weight],
      ]),
    [items],
  )

  const scroll = useCallback((dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }, [])

  return {
    isEmpty: products.length === 0,
    groups,
    active,
    setGroupSlug,
    items,
    mainRows: onlyDiff ? main.filter((r) => r.differs) : main,
    extraRows: onlyDiff ? extra.filter((r) => r.differs) : extra,
    onlyDiff,
    toggleDiff: () => setOnlyDiff((v) => !v),
    remove: removeFromCompare,
    scroller,
    scroll,
    columns: `minmax(220px,270px) repeat(${Math.max(items.length, 4)}, minmax(180px, 1fr))`,
  }
}
