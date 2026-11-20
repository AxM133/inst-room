import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { Price } from '@/shared/ui'
import type { Product } from '../model/types'
import { BadgeLabel, StockLabel } from './ProductLabels'

interface ProductRowViewProps {
  product: Product
  toolbar?: ReactNode
  action?: ReactNode
}

export function ProductRowView({ product, toolbar, action }: ProductRowViewProps) {
  return (
    <article className="group relative flex min-h-[111px] flex-col gap-3 border-b border-surface bg-white p-3 pr-[76px] transition-all duration-300 hover:z-10 hover:shadow-card sm:flex-row sm:items-center sm:gap-8 sm:pl-10">
      {product.badge && <BadgeLabel badge={product.badge} className="absolute left-2 top-2" />}

      <Link to={ROUTES.product(product.id)} className="grid h-[90px] w-[140px] shrink-0 place-items-center sm:h-[100px] sm:w-[130px]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="min-w-0 flex-1 sm:pr-40">
        <Link to={ROUTES.product(product.id)} className="transition-colors hover:text-brand">
          <h3 className="font-sans text-[16px] font-medium leading-5">
            {product.name} {product.weight}
          </h3>
        </Link>
        <p className="mt-2 max-w-[330px] text-[14px] leading-5 text-graphite">{product.description}</p>
        <StockLabel inStock={product.inStock} className="mt-1" />
      </div>

      {toolbar && <div className="absolute right-[78px] top-3 flex items-center gap-2">{toolbar}</div>}
      {action && <div className="absolute right-0 top-0">{action}</div>}
      <Price value={product.price} oldValue={product.oldPrice} className="absolute bottom-3 right-3" />
    </article>
  )
}
