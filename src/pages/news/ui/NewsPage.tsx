import { Breadcrumbs, Container, PageTitle } from '@/shared/ui'
import { NewsList } from './NewsList'
import { NEWS_PAGE } from '../model'

export function NewsPage() {
  return (
    <Container>
      <Breadcrumbs items={NEWS_PAGE.crumbs} />
      <PageTitle className="mt-[18px]">{NEWS_PAGE.title}</PageTitle>
      <NewsList />
    </Container>
  )
}
