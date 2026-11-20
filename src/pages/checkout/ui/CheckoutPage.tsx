import { Breadcrumbs, Container, PageTitle } from '@/shared/ui'
import { CheckoutFlow } from '@/features/checkout-flow'
import { CHECKOUT_PAGE } from '../model'

export function CheckoutPage() {
  return (
    <Container className="pb-[80px]">
      <Breadcrumbs items={CHECKOUT_PAGE.crumbs} />
      <PageTitle className="mt-[18px]">{CHECKOUT_PAGE.title}</PageTitle>
      <div className="mt-[30px]">
        <CheckoutFlow />
      </div>
    </Container>
  )
}
