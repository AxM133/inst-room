import { cn } from '../../../lib'

interface CounterBadgeProps {
  value: number
  className?: string
}

export function CounterBadge({ value, className }: CounterBadgeProps) {
  return (
    <span
      key={value}
      className={cn(
        'grid size-5 animate-pop place-items-center rounded-full bg-brand text-[10px] font-medium leading-none text-white',
        className,
      )}
    >
      {value}
    </span>
  )
}
