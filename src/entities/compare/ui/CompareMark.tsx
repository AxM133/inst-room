import { cn } from '@/shared/lib'
import { CompareIcon } from '@/shared/ui'

interface MarkProps {
  active: boolean
  size?: number
  className?: string
}

export function CompareMark({ active, size = 24, className }: MarkProps) {
  return (
    <CompareIcon
      size={size}
      className={cn(
        'transition-all duration-300',
        active ? 'scale-110 text-black' : 'text-line group-hover/cmp:text-graphite',
        className,
      )}
    />
  )
}
