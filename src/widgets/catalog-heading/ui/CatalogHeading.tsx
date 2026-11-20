import { Breadcrumbs, PageTitle } from '@/shared/ui'
import { useCatalogHeading } from '../model/useCatalogHeading'

export function CatalogHeading() {
  const vm = useCatalogHeading()

  return (
    <>
      <Breadcrumbs items={vm.crumbs} />
      <PageTitle key={vm.title} className="mt-[18px]">
        {vm.title}
      </PageTitle>
    </>
  )
}
