import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { formatPrice } from '@/shared/lib'
import type { Product } from '@/entities/product'

interface OrderLineProps {
  product: Product
  qty: number
}

export function OrderLine({ product, qty }: OrderLineProps) {
  return (
    <li className="grid grid-cols-[72px_1fr_auto] items-center gap-4 py-2 sm:grid-cols-[170px_1fr_160px_120px]">
      <Link to={ROUTES.product(product.id)} className="grid h-[56px] place-items-center sm:justify-items-start sm:pl-10">
        <img src={product.image} alt="" className="max-h-full max-w-[64px] object-contain" />
      </Link>
      <Link to={ROUTES.product(product.id)} className="text-[16px] leading-5 hover:text-brand">
        {product.name}
      </Link>
      <span className="hidden text-[16px] sm:block">
        {formatPrice(product.price)} <span className="mx-1.5">x</span> {qty}
      </span>
      <span className="text-right text-[16px] font-medium">{formatPrice(product.price * qty)}</span>
    </li>
  )
}
