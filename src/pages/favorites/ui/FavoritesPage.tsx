import { Breadcrumbs, Container, PageTitle } from '@/shared/ui'
import { FavoritesList } from '@/widgets/favorites-list'
import { FAVORITES_PAGE } from '../model'

export function FavoritesPage() {
  return (
    <Container>
      <Breadcrumbs items={FAVORITES_PAGE.crumbs} />
      <PageTitle className="mt-[18px]">{FAVORITES_PAGE.title}</PageTitle>
      <FavoritesList />
    </Container>
  )
}
