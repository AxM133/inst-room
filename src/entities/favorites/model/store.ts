import { useMemo } from 'react'
import { createStore } from '@/shared/lib'

export const favoritesStore = createStore<string[]>([], 'inst-room:favorites')

export const toggleFavorite = (id: string) =>
  favoritesStore.set((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]))

export function useFavorites() {
  const ids = favoritesStore.use()
  const set = useMemo(() => new Set(ids), [ids])
  return { ids, count: ids.length, has: (id: string) => set.has(id) }
}
