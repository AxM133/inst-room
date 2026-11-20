import { ROUTES } from '@/shared/config'
import { CATEGORIES } from '@/entities/category'

export const FOOTER_CATEGORY_LINKS = CATEGORIES.map((c) => ({ label: c.title, to: ROUTES.category(c.slug) }))

export const FOOTER_COMPANY_LINKS = [
  { label: 'О компании', to: ROUTES.about },
  { label: 'Контакты', to: ROUTES.contacts },
  { label: 'Новинки', to: ROUTES.category('new') },
  { label: 'Хиты сезона', to: ROUTES.category('hits') },
  { label: 'Распродажи', to: ROUTES.category('sale') },
]
