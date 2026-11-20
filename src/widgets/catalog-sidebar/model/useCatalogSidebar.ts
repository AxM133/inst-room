import { useCategoryMenu, CATEGORIES, getCategory } from '@/entities/category'
import { useCatalogScope } from '@/features/catalog-filters'

export function useCatalogSidebar() {
  const { pool, brand } = useCatalogScope()
  const menu = useCategoryMenu()

  return {
    pool,
    lockedBrandId: brand?.id,
    categories: CATEGORIES,
    hoverSlug: menu.hoverSlug,
    hoverCategory: menu.hoverSlug ? getCategory(menu.hoverSlug) : undefined,
    openMenu: menu.open,
    closeMenu: menu.close,
    closeMenuNow: menu.closeNow,
  }
}
