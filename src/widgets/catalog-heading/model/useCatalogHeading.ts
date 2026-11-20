import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'
import { useCatalogScope } from '@/features/catalog-filters'

export function useCatalogHeading() {
  const { target, brand } = useCatalogScope()

  if (brand) {
    const crumbs: Crumb[] = [
      { label: 'Главная', to: ROUTES.home },
      { label: 'Бренды', to: ROUTES.brands },
      { label: brand.name },
    ]
    return { title: brand.name, crumbs, notFound: false }
  }

  return { title: target?.title ?? 'Каталог', crumbs: target?.crumbs ?? [], notFound: !target }
}
