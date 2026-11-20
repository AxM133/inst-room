import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { ChevronIcon, MenuIcon } from '@/shared/ui'
import { SubcategoryFlyout } from '@/entities/category'
import { useCatalogMenu } from '../model/useCatalogMenu'

export function CatalogMenu() {
  const vm = useCatalogMenu()

  return (
    <div ref={vm.ref} className="relative">
      <button
        type="button"
        onClick={vm.toggle}
        aria-expanded={vm.isOpen}
        className={cn(
          'flex h-12 w-[200px] items-center gap-3 rounded-[3px] border px-4 text-[16px] text-white transition-all duration-300',
          vm.isOpen ? 'border-brand bg-brand' : 'border-brand hover:bg-brand/15',
        )}
      >
        <MenuIcon size={26} />
        Каталог товаров
      </button>

      {vm.isOpen && (
        <div className="absolute left-0 top-[calc(100%+20px)] z-40 flex w-[calc(100vw-2rem)] max-w-[1210px] animate-drop-in bg-white shadow-pop max-md:flex-col md:w-[900px]">
          <ul className="w-full shrink-0 md:w-[310px]">
            {vm.categories.map((category) => (
              <li key={category.slug}>
                <Link
                  to={ROUTES.category(category.slug)}
                  onMouseEnter={() => vm.open(category.slug)}
                  onFocus={() => vm.open(category.slug)}
                  className={cn(
                    'flex h-[72px] items-center justify-between px-6 font-display text-[16px] transition-colors duration-200',
                    category.slug === vm.activeSlug ? 'bg-ink text-white' : 'hover:bg-surface',
                  )}
                >
                  {category.title}
                  <ChevronIcon size={22} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="min-h-[300px] flex-1 border-l border-surface">
            <SubcategoryFlyout category={vm.activeCategory} onNavigate={vm.close} />
          </div>
        </div>
      )}
    </div>
  )
}
