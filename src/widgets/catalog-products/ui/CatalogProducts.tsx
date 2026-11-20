import { cn } from '@/shared/lib'
import { Button, Pagination, ShowMoreButton } from '@/shared/ui'
import { CatalogToolbar } from '@/features/catalog-toolbar'
import { ProductCard, ProductRow } from '@/widgets/product-card'
import { useCatalogProducts } from '../model/useCatalogProducts'

export function CatalogProducts() {
  const vm = useCatalogProducts()

  return (
    <div className="min-w-0">
      <CatalogToolbar className="mb-5 lg:mb-[26px]" />

      {vm.isEmpty ? (
        <div className="animate-fade-up bg-white px-6 py-16 text-center">
          <p className="font-display text-[24px]">Ничего не найдено</p>
          <p className="mt-3 text-muted">Попробуйте изменить параметры фильтра</p>
          <Button className="mt-6" onClick={vm.reset}>
            Сбросить фильтр
          </Button>
        </div>
      ) : vm.view === 'grid' ? (
        <div key={`grid-${vm.page}`} className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {vm.products.map((product, index) => (
            <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${(index % 12) * 40}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div key={`list-${vm.page}`} className="flex animate-fade-in flex-col">
          {vm.products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
      )}

      {!vm.isEmpty && (
        <div className={cn('mt-5')}>
          {vm.hasMore && <ShowMoreButton onClick={vm.showMore} />}
          <Pagination page={vm.page} totalPages={vm.totalPages} onChange={vm.setPage} className="mt-[26px]" />
        </div>
      )}
    </div>
  )
}
