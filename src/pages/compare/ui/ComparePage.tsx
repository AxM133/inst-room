import { Breadcrumbs, Container } from '@/shared/ui'
import { CompareTable } from '@/widgets/compare-table'
import { NewsBlock } from '@/widgets/news-block'
import { COMPARE_PAGE } from '../model'

export function ComparePage() {
  return (
    <>
      <div className="bg-ink pb-[60px]">
        <Container>
          <Breadcrumbs items={COMPARE_PAGE.crumbs} tone="dark" />
          <CompareTable />
        </Container>
      </div>
      <NewsBlock />
    </>
  )
}
