import type { Product } from '@/entities/product'
import { ProductCardView, ProductRowView } from '@/entities/product'
import { AddToCartButton } from '@/features/cart-add'
import { CompareToggle } from '@/features/compare-toggle'
import { FavoriteToggle } from '@/features/favorite-toggle'

const Toolbar = ({ id }: { id: string }) => (
  <>
    <CompareToggle productId={id} />
    <FavoriteToggle productId={id} />
  </>
)

export function ProductCard({ product }: { product: Product }) {
  return (
    <ProductCardView
      product={product}
      toolbar={<Toolbar id={product.id} />}
      action={<AddToCartButton productId={product.id} />}
    />
  )
}

export function ProductRow({ product }: { product: Product }) {
  return (
    <ProductRowView
      product={product}
      toolbar={<Toolbar id={product.id} />}
      action={<AddToCartButton productId={product.id} />}
    />
  )
}
