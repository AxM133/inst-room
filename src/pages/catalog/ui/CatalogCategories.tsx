import { cn } from '@/shared/lib'
import { Pagination, ShowMoreButton } from '@/shared/ui'
import { SubcategoryCard } from '@/entities/category'
import { useCatalogCategories } from '../model/useCatalogCategories'

export function CatalogCategories() {
  const vm = useCatalogCategories()

  return (
    <div className="mt-8 animate-fade-up">
      <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
        {vm.categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => vm.selectCategory(category.slug)}
            aria-pressed={category.slug === vm.activeSlug}
            className={cn(
              'h-[51px] px-3 text-[16px] transition-colors duration-300',
              category.slug === vm.activeSlug ? 'bg-brand text-white' : 'bg-white hover:text-brand',
            )}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="bg-white px-4 pb-[60px] pt-[46px]">
        <div key={vm.activeSlug + vm.page} className="mx-auto grid max-w-[766px] animate-fade-in gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vm.items.map((item) => (
            <SubcategoryCard key={item.slug} item={item} />
          ))}
        </div>
        <div className="mx-auto mt-4 max-w-[766px]">
          {vm.hasMore && <ShowMoreButton onClick={vm.showMore} />}
          <Pagination page={vm.page} totalPages={vm.totalPages} onChange={vm.changePage} className="mt-[26px]" />
        </div>
      </div>
    </div>
  )
}
