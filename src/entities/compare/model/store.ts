import { useMemo } from 'react'
import { createStore } from '@/shared/lib'

export const compareStore = createStore<string[]>([], 'inst-room:compare')

export const toggleCompare = (id: string) =>
  compareStore.set((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]))

export const removeFromCompare = (id: string) => compareStore.set((ids) => ids.filter((x) => x !== id))

export function useCompare() {
  const ids = compareStore.use()
  const set = useMemo(() => new Set(ids), [ids])
  return { ids, count: ids.length, has: (id: string) => set.has(id) }
}
