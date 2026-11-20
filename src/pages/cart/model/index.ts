import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'

export const CART_PAGE = {
  title: 'Корзина',
  continueLabel: 'Продолжить покупки',
  crumbs: [{ label: 'Главная', to: ROUTES.home }, { label: 'Корзина' }] satisfies Crumb[],
}
export * from './useCartContent'
