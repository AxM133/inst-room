import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'

export const BRANDS_PAGE = {
  title: 'Бренды',
  crumbs: [{ label: 'Главная', to: ROUTES.home }, { label: 'Бренды' }] satisfies Crumb[],
}
export * from './useBrandsGrid'
