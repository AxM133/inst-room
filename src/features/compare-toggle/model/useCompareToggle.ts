import { useCallback } from 'react'
import { toggleCompare, useCompare } from '@/entities/compare'

export function useCompareToggle(productId: string) {
  const { has } = useCompare()
  const toggle = useCallback(() => toggleCompare(productId), [productId])
  return { active: has(productId), toggle }
}
