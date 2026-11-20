import { formatPrice } from '@/shared/lib'
import { Accordion } from '@/shared/ui'
import { OrderLine } from '@/entities/order'
import { useOrdersList } from '../model/useOrdersList'

export function OrdersList() {
  const rows = useOrdersList()

  return (
    <ul className="flex flex-col gap-0.5">
      {rows.map(({ order, lines, total }, index) => (
        <li key={order.id} className="animate-fade-up bg-white" style={{ animationDelay: `${index * 60}ms` }}>
          <Accordion
            defaultOpen={index === 0}
            headerClassName="min-h-[80px] px-6 py-4 sm:px-12 hover:text-brand"
            bodyClassName="px-6 pb-8 sm:px-12"
            title={
              <span className="flex flex-wrap items-center justify-between gap-x-10 gap-y-1">
                <span className="font-display text-[16px] leading-5">Заказ № {order.id}</span>
                <span className="flex flex-wrap gap-x-10 text-[14px] text-muted">
                  <span>
                    Создан: <span className="ml-1">{order.createdAt}</span>
                  </span>
                  <span>
                    Получен: <span className="ml-1">{order.receivedAt}</span>
                  </span>
                </span>
              </span>
            }
          >
            <ul className="max-h-[340px] overflow-y-auto pr-4 scrollbar-thin-brand">
              {lines.map(({ product, qty }) => (
                <OrderLine key={product.id} product={product} qty={qty} />
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between border-t border-graphite px-4 pt-4 font-display text-[16px] sm:pl-[52px]">
              <span>Итого:</span>
              <span>{formatPrice(total)}</span>
            </div>
          </Accordion>
        </li>
      ))}
    </ul>
  )
}
