import { ROUTES } from '@/shared/config'

export const MAIN_NAV = [
  { label: 'О компании', to: ROUTES.about },
  { label: 'Акции', to: ROUTES.category('sale') },
  { label: 'Хиты сезона', to: ROUTES.category('hits') },
  { label: 'Новинки', to: ROUTES.category('new') },
] as const
