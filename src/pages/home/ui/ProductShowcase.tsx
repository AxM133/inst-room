import { Link } from 'react-router'
import { CarouselArrows, CarouselDots, CarouselTrack, Container, Tabs } from '@/shared/ui'
import { ProductCard } from '@/widgets/product-card'
import { useProductShowcase } from '../model/useProductShowcase'

export function ProductShowcase() {
  const vm = useProductShowcase()

  return (
    <section>
      <div className="bg-black">
        <Container>
          <Tabs variant="bar" items={vm.tabs} value={vm.tab} onChange={vm.setTab} />
        </Container>
      </div>
      <div className="bg-ink pb-[34px] pt-[50px]">
        <Container>
          <div className="relative">
            <CarouselArrows
              controller={vm.carousel}
              className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 justify-between xl:-mx-[62px]"
              buttonClassName="pointer-events-auto"
            />
            <CarouselTrack
              controller={vm.carousel}
              items={vm.products}
              getKey={(p) => p.id}
              renderItem={(p) => <ProductCard product={p} />}
              itemClassName="basis-[85%] sm:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-60px)/4)]"
            />
          </div>
          <div className="relative mt-8 flex items-center justify-center">
            <CarouselDots controller={vm.carousel} className="max-w-[calc(100%-140px)] flex-wrap" />
            <Link to={vm.allLink} className="absolute right-0 text-[14px] text-brand transition-colors hover:text-white">
              Смотреть все
            </Link>
          </div>
        </Container>
      </div>
    </section>
  )
}
