import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'

export const CATALOG_PAGE = {
  title: 'Каталог',
  crumbs: [{ label: 'Главная', to: ROUTES.home }, { label: 'Каталог' }] satisfies Crumb[],
}
export * from './useCatalogCategories'
