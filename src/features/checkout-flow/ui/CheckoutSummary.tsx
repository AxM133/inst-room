import { formatPrice, pluralize } from '@/shared/lib'

interface CheckoutSummaryProps {
  quantity: number
  subtotal: number
  discount: number
  deliveryCost: number | null
  total: number
}

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between text-[16px] leading-5">
    <span>{label}</span>
    <span className="w-[130px]">{value}</span>
  </div>
)

export function CheckoutSummary({ quantity, subtotal, discount, deliveryCost, total }: CheckoutSummaryProps) {
  const delivery = deliveryCost === null ? '—' : deliveryCost === 0 ? 'Бесплатно' : formatPrice(deliveryCost)

  return (
    <aside className="self-start rounded-[4px] bg-ink p-8 text-white sm:px-[70px] sm:py-[50px] lg:rounded-none lg:rounded-r-[4px] lg:rounded-bl-[4px]">
      <div className="flex items-center justify-between">
        <span className="font-display text-[20px] leading-6">Итого</span>
        <span key={total} className="w-[130px] animate-fade-in font-display text-[20px] leading-6 text-brand">
          {formatPrice(total)}
        </span>
      </div>
      <div className="mt-5 flex flex-col gap-[16px]">
        <Row label={`${quantity} ${pluralize(quantity, ['товар', 'товара', 'товаров'])}`} value={formatPrice(subtotal - discount)} />
        <Row label="Скидка" value={`— ${formatPrice(discount)}`} />
        <Row label="Доставка" value={delivery} />
      </div>
    </aside>
  )
}
