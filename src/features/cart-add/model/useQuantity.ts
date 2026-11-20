import { useCallback } from 'react'
import { removeFromCart, setCartQty } from '@/entities/cart'

export function useQuantity(productId: string, qty: number) {
  const increase = useCallback(() => setCartQty(productId, qty + 1), [productId, qty])
  const decrease = useCallback(() => setCartQty(productId, qty - 1), [productId, qty])
  const remove = useCallback(() => removeFromCart(productId), [productId])
  return { increase, decrease, remove, canDecrease: qty > 1 }
}
