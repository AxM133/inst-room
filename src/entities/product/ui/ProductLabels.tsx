import { cn } from '@/shared/lib'
import { CheckIcon } from '@/shared/ui'
import type { ProductBadge } from '../model/types'

const BADGE: Record<ProductBadge, { text: string; cls: string }> = {
  new: { text: 'Новинка', cls: 'bg-badge' },
  sale: { text: 'Акция', cls: 'bg-brand-light' },
}

export function BadgeLabel({ badge, className }: { badge?: ProductBadge; className?: string }) {
  if (!badge) return null
  return (
    <span className={cn('inline-block px-2 py-[3px] text-[12px] leading-4 text-white', BADGE[badge].cls, className)}>
      {BADGE[badge].text}
    </span>
  )
}

export function StockLabel({ inStock, className }: { inStock: boolean; className?: string }) {
  return inStock ? (
    <span className={cn('inline-flex items-center gap-1 whitespace-nowrap text-[14px] leading-4 text-success', className)}>
      <CheckIcon size={14} />в наличии
    </span>
  ) : (
    <span className={cn('whitespace-nowrap text-[14px] leading-4 text-brand', className)}>под заказ</span>
  )
}
