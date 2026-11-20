import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'

export const COMPARE_PAGE = {
  crumbs: [{ label: 'Главная', to: ROUTES.home }, { label: 'Сравнение' }] satisfies Crumb[],
}
export * from './useCompareTable'
