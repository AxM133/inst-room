import { useCallback } from 'react'
import { toggleFavorite, useFavorites } from '@/entities/favorites'

export function useFavoriteToggle(productId: string) {
  const { has } = useFavorites()
  const toggle = useCallback(() => toggleFavorite(productId), [productId])
  return { active: has(productId), toggle }
}
