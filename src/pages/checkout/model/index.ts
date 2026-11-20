import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'

export const CHECKOUT_PAGE = {
  title: 'Оформление заказа',
  crumbs: [{ label: 'Главная', to: ROUTES.home }, { label: 'Оформление заказа' }] satisfies Crumb[],
}
