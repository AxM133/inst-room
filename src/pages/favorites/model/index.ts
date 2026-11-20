import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'

export const FAVORITES_PAGE = {
  title: 'Избранное',
  crumbs: [{ label: 'Главная', to: ROUTES.home }, { label: 'Избранное' }] satisfies Crumb[],
}
export * from './useFavoritesList'
