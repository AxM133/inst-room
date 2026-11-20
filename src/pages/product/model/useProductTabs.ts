import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { openModal } from '@/shared/lib'
import type { TabItem } from '@/shared/ui'
import { getProduct } from '@/entities/product'
import { useReviews } from '@/entities/review'

export type ProductTab = 'description' | 'specs' | 'delivery' | 'reviews'

export const PRODUCT_TABS: TabItem<ProductTab>[] = [
  { value: 'description', label: 'Описание' },
  { value: 'specs', label: 'Характеристики' },
  { value: 'delivery', label: 'Доставка' },
  { value: 'reviews', label: 'Отзывы' },
]

export const CITIES = ['Москва', 'Санкт-Петербург', 'Мурманск', 'Владивосток', 'Иркутск', 'Тверь', 'Ростов на Дону', 'Калининград']
export const PICKUP_POINTS = ['Москва, ул Первомайская 14', 'Москва, ул Маяковского 120', 'Санкт-Петербург, ул Маршака 2']

export interface DeliveryValues {
  method: 'courier' | 'pickup'
  city: string
  point: string
}

export const REVIEWS_PAGE = 10

export function useProductTabs() {
  const { id } = useParams()
  const product = getProduct(id)
  const [tab, setTab] = useState<ProductTab>('description')
  const reviews = useReviews()
  const [limit, setLimit] = useState(REVIEWS_PAGE)

  const delivery = useForm<DeliveryValues>({ defaultValues: { method: 'courier', city: '', point: '' } })
  const method = delivery.watch('method')
  const [city, point] = delivery.watch(['city', 'point'])

  const visibleReviews = useMemo(() => reviews.slice(0, limit), [reviews, limit])

  return {
    product,
    tab,
    setTab,
    tabs: PRODUCT_TABS,
    delivery: {
      control: delivery.control,
      method,
      city,
      point,
      setCity: (value: string) => delivery.setValue('city', value),
      setPoint: (value: string) => delivery.setValue('point', value),
    },
    reviews: visibleReviews,
    canShowMoreReviews: reviews.length > limit,
    hasManyReviews: reviews.length > REVIEWS_PAGE,
    showMoreReviews: () => setLimit((n) => n + REVIEWS_PAGE),
    openReviewForm: () => openModal({ kind: 'review' }),
  }
}
