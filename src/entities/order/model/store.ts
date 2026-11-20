import { createStore } from '@/shared/lib'
import { getProduct } from '@/entities/product'
import type { CartItem } from '@/entities/cart'

export interface Order {
  id: number
  createdAt: string
  receivedAt: string
  items: CartItem[]
}

const SEED: Order[] = [
  { id: 25463, createdAt: '14.07.2022', receivedAt: '14.07.2022', items: [{ productId: '2', qty: 2 }, { productId: '1', qty: 2 }, { productId: '3', qty: 1 }, { productId: '5', qty: 3 }, { productId: '4', qty: 2 }] },
  { id: 25398, createdAt: '02.07.2022', receivedAt: '05.07.2022', items: [{ productId: '9', qty: 1 }, { productId: '10', qty: 2 }] },
  { id: 25211, createdAt: '21.06.2022', receivedAt: '24.06.2022', items: [{ productId: '7', qty: 4 }] },
  { id: 24987, createdAt: '30.05.2022', receivedAt: '02.06.2022', items: [{ productId: '12', qty: 1 }, { productId: '14', qty: 1 }, { productId: '13', qty: 2 }] },
  { id: 24610, createdAt: '11.05.2022', receivedAt: '13.05.2022', items: [{ productId: '6', qty: 2 }, { productId: '8', qty: 1 }] },
]

export const ordersStore = createStore<Order[]>(SEED, 'inst-room:orders')

export const addOrder = (items: CartItem[]): Order => {
  const today = new Date().toLocaleDateString('ru-RU')
  const order: Order = { id: 25464 + ordersStore.get().length, createdAt: today, receivedAt: today, items }
  ordersStore.set((orders) => [order, ...orders])
  return order
}

export const orderTotal = (order: Order): number =>
  order.items.reduce((sum, item) => sum + (getProduct(item.productId)?.price ?? 0) * item.qty, 0)

export const useOrders = () => ordersStore.use()
