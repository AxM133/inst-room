import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Price } from '@/shared/ui'
import { useCardGallery } from '../model/useCardGallery'
import type { Product } from '../model/types'
import { BadgeLabel, StockLabel } from './ProductLabels'

interface ProductCardViewProps {
  product: Product
  /** compare / favorite toggles, rendered in the top-right corner */
  toolbar?: ReactNode
  /** add-to-cart button, rendered in the bottom-right corner */
  action?: ReactNode
  className?: string
}

export function ProductCardView({ product, toolbar, action, className }: ProductCardViewProps) {
  const gallery = useCardGallery(4)

  return (
    <article
      className={cn(
        'group relative h-full min-h-[340px] overflow-hidden rounded-[4px] bg-white transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-card',
        className,
      )}
    >
      <Link
        to={ROUTES.product(product.id)}
        className="block px-3 pt-3"
        onMouseMove={gallery.onMove}
        onMouseLeave={gallery.onLeave}
      >
        <div className="grid h-[200px] place-items-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="mt-1 flex gap-1" aria-hidden="true">
          {Array.from({ length: gallery.segments }, (_, i) => (
            <span
              key={i}
              className={cn(
                'h-[2px] flex-1 transition-colors duration-300',
                i === gallery.active ? 'bg-brand/60' : 'bg-line',
              )}
            />
          ))}
        </div>
      </Link>

      {product.badge && <BadgeLabel badge={product.badge} className="absolute left-3 top-3" />}
      {toolbar && <div className="absolute right-3 top-3 flex items-center gap-2">{toolbar}</div>}

      <div className="px-3 pb-3 pt-3">
        <Link to={ROUTES.product(product.id)} className="block transition-colors hover:text-brand">
          <h3 className="line-clamp-1 font-sans text-[16px] font-medium leading-5" title={product.name}>
            {product.name}
          </h3>
          <p className="text-[16px] font-medium leading-5">{product.weight}</p>
        </Link>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 pr-[68px]">
          <Price value={product.price} oldValue={product.oldPrice} />
          <StockLabel inStock={product.inStock} />
        </div>
      </div>

      {action && <div className="absolute bottom-0 right-0">{action}</div>}
    </article>
  )
}
