import { cn, formatPrice } from '../../../lib'

interface PriceProps {
  value: number
  oldValue?: number
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const SIZE = {
  sm: { price: 'text-[16px]', old: 'text-[14px]' },
  md: { price: 'text-[18px]', old: 'text-[14px]' },
  lg: { price: 'text-[30px] leading-9', old: 'text-[16px]' },
}

export function Price({ value, oldValue, size = 'md', className }: PriceProps) {
  return (
    <div className={cn('flex items-baseline gap-2.5 whitespace-nowrap', className)}>
      <span className={cn('font-display', SIZE[size].price)}>{formatPrice(value)}</span>
      {oldValue && oldValue > value && (
        <span className={cn('font-display text-line line-through', SIZE[size].old)}>{formatPrice(oldValue)}</span>
      )}
    </div>
  )
}
