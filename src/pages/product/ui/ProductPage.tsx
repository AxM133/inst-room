import { Container } from '@/shared/ui'
import { ProductDetails } from './ProductDetails'
import { ProductTabs } from './ProductTabs'
import { RelatedProducts } from './RelatedProducts'

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
