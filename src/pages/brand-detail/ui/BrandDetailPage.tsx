import { Container } from '@/shared/ui'
import { BrandInfo } from './BrandInfo'
import { CatalogHeading } from '@/widgets/catalog-heading'
import { CatalogProducts } from '@/widgets/catalog-products'
import { CatalogSidebar } from '@/widgets/catalog-sidebar'

export function BrandDetailPage() {
  return (
    <Container className="pb-[80px]">
      <CatalogHeading />
      <BrandInfo />
      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[310px_1fr] lg:gap-[20px]">
        <CatalogSidebar showMenu={false} />
        <CatalogProducts />
      </div>
    </Container>
  )
}
