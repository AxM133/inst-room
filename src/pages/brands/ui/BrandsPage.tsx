import { Breadcrumbs, Container, PageTitle } from '@/shared/ui'
import { BrandsGrid } from './BrandsGrid'
import { BRANDS_PAGE } from '../model'

export function BrandsPage() {
  return (
    <Container>
      <Breadcrumbs items={BRANDS_PAGE.crumbs} />
      <PageTitle className="mt-[18px]">{BRANDS_PAGE.title}</PageTitle>
      <BrandsGrid />
    </Container>
  )
}
