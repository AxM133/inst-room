import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { ChevronIcon, PromoBanners } from '@/shared/ui'
import { SubcategoryFlyout } from '@/entities/category'
import { FilterPanel } from '@/features/catalog-filters'
import { useCatalogSidebar } from '../model/useCatalogSidebar'

interface CatalogSidebarProps {
  /** brand pages show only filters */
  showMenu?: boolean
}

export function CatalogSidebar({ showMenu = true }: CatalogSidebarProps) {
  const vm = useCatalogSidebar()

  return (
    <aside className="flex flex-col gap-5">
      {showMenu && (
        <nav
          aria-label="Категории"
          className="relative hidden lg:block"
          onMouseLeave={vm.closeMenu}
        >
          <ul className="bg-ink">
            {vm.categories.map((category) => (
              <li key={category.slug} className="border-b border-graphite last:border-0">
                <Link
                  to={ROUTES.category(category.slug)}
                  onMouseEnter={() => vm.openMenu(category.slug)}
                  onFocus={() => vm.openMenu(category.slug)}
                  className={cn(
                    'flex h-[50px] items-center justify-between px-5 font-display text-[14px] text-white transition-colors duration-200',
                    vm.hoverSlug === category.slug && 'bg-brand',
                  )}
                >
                  {category.title}
                  <ChevronIcon size={20} />
                </Link>
              </li>
            ))}
          </ul>
          {vm.hoverCategory && (
            <div className="absolute left-full top-0 z-30 w-[900px] animate-drop-in bg-white shadow-pop">
              <SubcategoryFlyout category={vm.hoverCategory} onNavigate={vm.closeMenuNow} />
            </div>
          )}
        </nav>
      )}

      <FilterPanel pool={vm.pool} lockedBrandId={vm.lockedBrandId} />

      <PromoBanners className="hidden lg:flex" />
    </aside>
  )
}
