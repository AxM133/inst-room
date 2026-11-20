import { Container } from '@/shared/ui'
import { ProductDetails } from '@/widgets/product-details'
import { ProductTabs } from '@/widgets/product-tabs'
import { RelatedProducts } from '@/widgets/related-products'

export function ProductPage() {
  return (
    <Container>
      <ProductDetails>
        <ProductTabs />
      </ProductDetails>
      <RelatedProducts />
    </Container>
  )
}
