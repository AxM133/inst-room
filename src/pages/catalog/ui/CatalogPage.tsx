import { Breadcrumbs, Container, PageTitle } from '@/shared/ui'
import { CatalogCategories } from './CatalogCategories'
import { CATALOG_PAGE } from '../model'

export function CatalogPage() {
  return (
    <Container className="pb-[80px]">
      <Breadcrumbs items={CATALOG_PAGE.crumbs} />
      <PageTitle className="mt-[18px]">{CATALOG_PAGE.title}</PageTitle>
      <CatalogCategories />
    </Container>
  )
}
