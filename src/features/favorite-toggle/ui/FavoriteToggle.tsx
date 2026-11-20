import { cn } from '@/shared/lib'
import { FavoriteMark } from '@/entities/favorites'
import { useFavoriteToggle } from '../model/useFavoriteToggle'

interface FavoriteToggleProps {
  productId: string
  size?: number
  className?: string
}

export function FavoriteToggle({ productId, size = 24, className }: FavoriteToggleProps) {
  const { active, toggle } = useFavoriteToggle(productId)
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={active}
      aria-label={active ? 'Убрать из избранного' : 'В избранное'}
      title={active ? 'Убрать из избранного' : 'В избранное'}
      className={cn('group/fav grid place-items-center transition-transform duration-300 active:scale-75', className)}
    >
      <FavoriteMark active={active} size={size} className={size > 24 ? 'text-black' : undefined} />
    </button>
  )
}
