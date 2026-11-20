import { useCart } from '@/entities/cart'

export function useCartContent() {
  const { lines, totals } = useCart()
  return { lines, totals, isEmpty: lines.length === 0 }
}
