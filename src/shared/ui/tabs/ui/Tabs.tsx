import { cn } from '../../../lib'
import type { TabItem, TabsVariant } from '../model/types'

interface TabsProps<T extends string> {
  items: TabItem<T>[]
  value: T
  onChange: (value: T) => void
  variant?: TabsVariant
  className?: string
}

const LIST: Record<TabsVariant, string> = {
  checkout: 'gap-6 sm:gap-[60px]',
  product: 'gap-6 sm:gap-[54px]',
  bar: 'gap-8 sm:gap-[50px]',
}

const TAB: Record<TabsVariant, { base: string; active: string; idle: string; line: string }> = {
  checkout: {
    base: 'font-display text-[18px] sm:text-[24px] leading-8 pb-0.5',
    active: 'text-black',
    idle: 'text-muted hover:text-ink',
    line: 'after:bg-black',
  },
  product: {
    base: 'font-display text-[16px] sm:text-[18px] leading-6 pb-1',
    active: 'text-black',
    idle: 'text-line hover:text-muted',
    line: 'after:bg-brand',
  },
  bar: {
    base: 'font-display text-[14px] leading-5 py-[14px]',
    active: 'text-white',
    idle: 'text-graphite hover:text-muted',
    line: 'after:hidden',
  },
}

export function Tabs<T extends string>({ items, value, onChange, variant = 'product', className }: TabsProps<T>) {
  const style = TAB[variant]

  return (
    <div role="tablist" className={cn('flex flex-wrap', LIST[variant], className)}>
      {items.map((item) => {
        const active = item.value === value
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={active}
            disabled={item.disabled}
            onClick={() => onChange(item.value)}
            className={cn(
              'relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full',
              'after:origin-left after:transition-transform after:duration-300',
              variant === 'product' && 'after:h-0.5',
              style.base,
              style.line,
              active ? `${style.active} after:scale-x-100` : `${style.idle} after:scale-x-0`,
            )}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
