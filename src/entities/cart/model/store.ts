import { useMemo } from 'react'
import { createStore } from '@/shared/lib'
import { getProduct, type Product } from '@/entities/product'

export interface CartItem {
  productId: string
  qty: number
}

export interface CartLine {
  product: Product
  qty: number
  total: number
}

export interface CartTotals {
  /** price without discount */
  subtotal: number
  discount: number
  total: number
  positions: number
  quantity: number
}

const MAX_QTY = 99

export const cartStore = createStore<CartItem[]>([], 'inst-room:cart')

export const addToCart = (productId: string, qty = 1) =>
  cartStore.set((items) =>
    items.some((i) => i.productId === productId)
      ? items.map((i) => (i.productId === productId ? { ...i, qty: Math.min(MAX_QTY, i.qty + qty) } : i))
      : [...items, { productId, qty }],
  )

export const setCartQty = (productId: string, qty: number) =>
  cartStore.set((items) =>
    items.map((i) => (i.productId === productId ? { ...i, qty: Math.max(1, Math.min(MAX_QTY, qty)) } : i)),
  )

export const removeFromCart = (productId: string) => cartStore.set((items) => items.filter((i) => i.productId !== productId))

export const toggleCart = (productId: string) =>
  cartStore.get().some((i) => i.productId === productId) ? removeFromCart(productId) : addToCart(productId)

export const clearCart = () => cartStore.set([])

export const computeCart = (items: CartItem[]): { lines: CartLine[]; totals: CartTotals } => {
  const lines = items.reduce<CartLine[]>((acc, item) => {
    const product = getProduct(item.productId)
    if (product) acc.push({ product, qty: item.qty, total: product.price * item.qty })
    return acc
  }, [])

  const total = lines.reduce((sum, l) => sum + l.total, 0)
  const subtotal = lines.reduce((sum, l) => sum + (l.product.oldPrice ?? l.product.price) * l.qty, 0)

  return {
    lines,
    totals: {
      subtotal,
      discount: subtotal - total,
      total,
      positions: lines.length,
      quantity: lines.reduce((sum, l) => sum + l.qty, 0),
    },
  }
}

export function useCart() {
  const items = cartStore.use()
  const summary = useMemo(() => computeCart(items), [items])
  const ids = useMemo(() => new Set(items.map((i) => i.productId)), [items])
  return { items, ...summary, has: (id: string) => ids.has(id) }
}
