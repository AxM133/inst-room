import { Container } from '@/shared/ui'
import { CatalogHeading } from '@/widgets/catalog-heading'
import { CatalogProducts } from '@/widgets/catalog-products'
import { CatalogSidebar } from '@/widgets/catalog-sidebar'

export function CategoryPage() {
  return (
    <Container className="pb-[80px]">
      <CatalogHeading />
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[310px_1fr] lg:gap-[20px]">
        <CatalogSidebar />
        <CatalogProducts />
      </div>
    </Container>
  )
}
