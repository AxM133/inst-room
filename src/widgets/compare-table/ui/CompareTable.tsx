import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { cn, formatPrice } from '@/shared/lib'
import { Accordion, ButtonLink, ChevronIcon, CloseIcon, PageTitle } from '@/shared/ui'
import { AddToCartButton } from '@/features/cart-add'
import { useCompareTable, type SpecRow } from '../model/useCompareTable'

const Rows = ({ rows, columns }: { rows: SpecRow[]; columns: string }) => (
  <div>
    {rows.map((row) => (
      <div
        key={row.label}
        style={{ gridTemplateColumns: columns }}
        className="grid animate-fade-in items-start border-t border-graphite py-[11px] text-[14px] leading-4 first:border-t-0"
      >
        <span className="font-display text-[14px] leading-5">{row.label}</span>
        {row.values.map((value, i) => (
          <span key={i} className="px-4 text-center text-[12px] leading-4">
            {value}
          </span>
        ))}
      </div>
    ))}
  </div>
)

const ArrowButton = ({ dir, onClick }: { dir: 'left' | 'right'; onClick: () => void }) => (
  <button
    type="button"
    aria-label={dir === 'left' ? 'Назад' : 'Вперёд'}
    onClick={onClick}
    className="grid size-[34px] place-items-center rounded-full bg-white text-black transition-all hover:bg-brand hover:text-white active:scale-90"
  >
    <ChevronIcon size={18} direction={dir} />
  </button>
)

export function CompareTable() {
  const vm = useCompareTable()

  return (
    <div className="animate-fade-in">
      <div className="mt-[18px] flex items-center justify-between">
        <PageTitle className="text-white">Сравнение товаров</PageTitle>
        <div className="flex gap-2.5">
          <ArrowButton dir="left" onClick={() => vm.scroll(-1)} />
          <ArrowButton dir="right" onClick={() => vm.scroll(1)} />
        </div>
      </div>

      {vm.isEmpty ? (
        <div className="py-20 text-center text-white">
          <p className="font-display text-[24px]">Нет товаров для сравнения</p>
          <p className="mt-3 text-muted">Нажмите на иконку сравнения у товара, чтобы добавить его сюда</p>
          <ButtonLink to={ROUTES.catalog} className="mt-6">
            Перейти в каталог
          </ButtonLink>
        </div>
      ) : (
        <>
          <div className="mt-8 flex gap-px overflow-x-auto scrollbar-none">
            {vm.groups.map((group) => (
              <button
                key={group.value}
                type="button"
                onClick={() => vm.setGroupSlug(group.value)}
                className={cn(
                  'h-[52px] shrink-0 px-8 text-[16px] text-white transition-colors duration-300',
                  group.value === vm.active ? 'bg-brand' : 'bg-graphite hover:bg-graphite/70',
                )}
              >
                {group.label}
              </button>
            ))}
          </div>

          <div ref={vm.scroller} className="mt-6 overflow-x-auto pb-4 scrollbar-thin-brand">
            <div className="min-w-[1000px] text-white">
              <div style={{ gridTemplateColumns: vm.columns }} className="grid items-start gap-px">
                <button
                  type="button"
                  onClick={vm.toggleDiff}
                  className="self-start px-5 pt-2.5 text-left text-[14px] text-brand transition-opacity hover:opacity-80"
                >
                  {vm.onlyDiff ? 'показать все характеристики' : 'показать только отличия'}
                </button>
                {vm.items.map((product) => (
                  <article key={product.id} className="relative mx-2 animate-scale-in bg-graphite p-4">
                    <button
                      type="button"
                      aria-label="Убрать из сравнения"
                      onClick={() => vm.remove(product.id)}
                      className="absolute right-3 top-3 text-white transition-transform duration-300 hover:rotate-90"
                    >
                      <CloseIcon size={22} />
                    </button>
                    <Link to={ROUTES.product(product.id)} className="mx-auto mt-2 block h-[66px] w-[90px] overflow-hidden rounded-[2px] bg-white">
                      <img src={product.image} alt="" className="size-full object-contain" />
                    </Link>
                    <Link to={ROUTES.product(product.id)} className="mt-2 block text-[12px] leading-[13px] transition-colors hover:text-brand">
                      {product.name} {product.weight}
                    </Link>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-display text-[14px]">{formatPrice(product.price)}</span>
                      <AddToCartButton productId={product.id} variant="compact" />
                    </div>
                  </article>
                ))}
              </div>

              <Accordion
                title={<span className="font-display text-[14px]">Основные характеристики</span>}
                defaultOpen
                headerClassName="mt-6 py-3 pl-5 pr-6 text-white hover:text-brand"
              >
                <Rows rows={vm.mainRows} columns={vm.columns} />
              </Accordion>
              <Accordion
                title={<span className="font-display text-[14px]">Дополнительные характеристики</span>}
                headerClassName="border-t border-graphite py-3 pl-5 pr-6 text-white hover:text-brand"
              >
                <Rows rows={vm.extraRows} columns={vm.columns} />
              </Accordion>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
