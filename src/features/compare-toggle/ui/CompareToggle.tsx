import { cn } from '@/shared/lib'
import { CompareMark } from '@/entities/compare'
import { useCompareToggle } from '../model/useCompareToggle'

interface CompareToggleProps {
  productId: string
  size?: number
  className?: string
}

export function CompareToggle({ productId, size = 24, className }: CompareToggleProps) {
  const { active, toggle } = useCompareToggle(productId)
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={active}
      aria-label={active ? 'Убрать из сравнения' : 'Добавить к сравнению'}
      title={active ? 'Убрать из сравнения' : 'Добавить к сравнению'}
      className={cn('group/cmp grid place-items-center transition-transform duration-300 active:scale-75', className)}
    >
      <CompareMark active={active} size={size} className={size > 24 && !active ? 'text-black' : undefined} />
    </button>
  )
}
