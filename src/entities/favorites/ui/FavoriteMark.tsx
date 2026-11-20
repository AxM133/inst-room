import { cn } from '@/shared/lib'
import { HeartFilledIcon, HeartIcon } from '@/shared/ui'

interface MarkProps {
  active: boolean
  size?: number
  className?: string
}

export function FavoriteMark({ active, size = 24, className }: MarkProps) {
  return active ? (
    <HeartFilledIcon key="on" size={size} className={cn('animate-pop text-brand-light', className)} />
  ) : (
    <HeartIcon key="off" size={size} className={cn('text-line transition-colors group-hover/fav:text-brand-light', className)} />
  )
}
