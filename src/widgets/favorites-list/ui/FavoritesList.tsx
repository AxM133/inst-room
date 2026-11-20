import { ROUTES } from '@/shared/config'
import { ButtonLink, Pagination, Select, ShowMoreButton } from '@/shared/ui'
import { ProductCard } from '@/widgets/product-card'
import { useFavoritesList } from '../model/useFavoritesList'

export function FavoritesList() {
  const vm = useFavoritesList()

  if (vm.isEmpty) {
    return (
      <div className="mt-8 animate-fade-up bg-white px-6 py-16 text-center">
        <p className="font-display text-[24px]">В избранном пока пусто</p>
        <p className="mt-3 text-muted">Нажмите на сердечко у товара, чтобы сохранить его здесь</p>
        <ButtonLink to={ROUTES.catalog} className="mt-6">
          Перейти в каталог
        </ButtonLink>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6 mt-9 flex flex-wrap items-center gap-x-[46px] gap-y-3 text-[14px]">
        <span className="font-bold">{vm.countLabel}</span>
        <div className="flex items-center gap-3">
          <span className="font-bold">Сортировать:</span>
          <Select variant="inline" options={vm.sortOptions} value={vm.sort} onChange={vm.changeSort} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {vm.products.map((product, index) => (
          <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${(index % 12) * 35}ms` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="mt-5 pb-[60px]">
        {vm.hasMore && <ShowMoreButton onClick={vm.showMore} />}
        <Pagination page={vm.page} totalPages={vm.totalPages} onChange={vm.changePage} className="mt-[26px]" />
      </div>
    </div>
  )
}
