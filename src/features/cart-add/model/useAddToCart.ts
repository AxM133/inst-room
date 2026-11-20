import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { ROUTES } from '@/shared/config'
import { addToCart, useCart } from '@/entities/cart'

/** First click adds the product, once it is in the cart the button leads to the cart. */
export function useAddToCart(productId: string) {
  const { has } = useCart()
  const navigate = useNavigate()
  const inCart = has(productId)

  const onClick = useCallback(() => {
    if (inCart) navigate(ROUTES.cart)
    else addToCart(productId)
  }, [inCart, navigate, productId])

  return { inCart, onClick }
}
