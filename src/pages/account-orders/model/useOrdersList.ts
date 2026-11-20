import { useMemo } from 'react'
import { getProduct } from '@/entities/product'
import { orderTotal, useOrders } from '@/entities/order'

export function useOrdersList() {
  const orders = useOrders()

  return useMemo(
    () =>
      orders.map((order) => ({
        order,
        total: orderTotal(order),
        lines: order.items.flatMap((item) => {
          const product = getProduct(item.productId)
          return product ? [{ product, qty: item.qty }] : []
        }),
      })),
    [orders],
  )
}
