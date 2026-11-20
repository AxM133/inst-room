import { ROUTES } from '@/shared/config'
import { Breadcrumbs, ButtonLink, Container, PageTitle } from '@/shared/ui'
import { CartContent } from '@/widgets/cart-content'
import { CART_PAGE } from '../model'

export function CartPage() {
  return (
    <Container>
      <Breadcrumbs items={CART_PAGE.crumbs} />
      <div className="mt-[18px] flex flex-wrap items-center justify-between gap-4">
        <PageTitle>{CART_PAGE.title}</PageTitle>
        <ButtonLink to={ROUTES.catalog} variant="light" className="h-[50px] px-8">
          {CART_PAGE.continueLabel}
        </ButtonLink>
      </div>
      <CartContent />
    </Container>
  )
}
