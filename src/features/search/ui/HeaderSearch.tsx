import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { cn, formatPrice } from '@/shared/lib'
import { SearchIcon } from '@/shared/ui'
import { useHeaderSearch } from '../model/useHeaderSearch'

export function HeaderSearch({ className }: { className?: string }) {
  const vm = useHeaderSearch()

  return (
    <div ref={vm.ref} className={cn('relative h-[52px] w-full sm:w-[310px]', className)}>
      <div
        className={cn(
          'absolute right-0 top-0 z-50 bg-white transition-[width,box-shadow] duration-300',
          vm.open ? 'w-[min(508px,calc(100vw-2rem))] shadow-pop' : 'w-full',
        )}
      >
        <form onSubmit={vm.onSubmit} role="search" className="flex h-[52px] items-center gap-3 px-3.5">
          <SearchIcon size={22} className="shrink-0 text-muted" />
          <input
            value={vm.query}
            onChange={vm.onChange}
            onFocus={vm.onFocus}
            placeholder="Поиск по каталогу"
            aria-label="Поиск по каталогу"
            className="h-full min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-muted"
          />
        </form>

        {vm.open && vm.hasQuery && (
          <div className="animate-drop-in">
            {vm.results.length > 0 ? (
              <>
                <ul className="max-h-[348px] overflow-y-auto pb-2 scrollbar-thin-brand">
                  {vm.results.map((product) => (
                    <li key={product.id}>
                      <Link
                        to={ROUTES.product(product.id)}
                        onClick={vm.pick}
                        className="grid grid-cols-[72px_1fr_auto] items-center gap-3 px-3.5 py-1 transition-colors hover:bg-surface"
                      >
                        <img src={product.image} alt="" className="h-[52px] w-[60px] object-contain" />
                        <span className="text-[14px] leading-[19px]">
                          {product.name}
                          <br />
                          {product.weight}
                        </span>
                        <span className="mr-4 font-display text-[16px]">{formatPrice(product.price)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={vm.showAll}
                  className="block h-14 w-full bg-graphite text-center text-[14px] text-white transition-colors hover:bg-brand"
                >
                  Показать все
                </button>
              </>
            ) : (
              <div className="bg-graphite px-12 py-[18px] text-[14px] text-white">Нет результатов</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
