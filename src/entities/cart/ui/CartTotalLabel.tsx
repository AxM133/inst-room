import { formatPrice } from '@/shared/lib'

interface CartTotalLabelProps {
  total: number
  caption?: string
}

export function CartTotalLabel({ total, caption = 'Товаров на сумму' }: CartTotalLabelProps) {
  return (
    <div className="text-[16px] leading-6 text-white">
      <div>{caption}</div>
      <div className="font-display text-[14px] font-bold leading-5">{formatPrice(total)}</div>
    </div>
  )
}
