import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'

export const CONTACTS_PAGE = {
  title: 'Контакты',
  crumbs: [{ label: 'Главная', to: ROUTES.home }, { label: 'Контакты' }] satisfies Crumb[],
}
export * from './useContacts'
