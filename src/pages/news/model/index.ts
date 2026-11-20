import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'

export const NEWS_PAGE = {
  title: 'Новости',
  crumbs: [{ label: 'Главная', to: ROUTES.home }, { label: 'Новости' }] satisfies Crumb[],
}
