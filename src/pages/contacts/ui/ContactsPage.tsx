import { Breadcrumbs, Container, PageTitle } from '@/shared/ui'
import { ContactsMap } from '@/widgets/contacts-map'
import { CONTACTS_PAGE } from '../model'

export function ContactsPage() {
  return (
    <>
      <Container>
        <Breadcrumbs items={CONTACTS_PAGE.crumbs} />
        <PageTitle className="mt-[18px]">{CONTACTS_PAGE.title}</PageTitle>
      </Container>
      <ContactsMap />
    </>
  )
}
