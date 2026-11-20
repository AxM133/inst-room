import { ROUTES } from '@/shared/config'
import { CarouselArrows, CarouselTrack, Container, Reveal, SectionTitle } from '@/shared/ui'
import { BrandTile } from '@/entities/brand'
import { Link } from 'react-router'
import { useBrandCarousel } from '../model/useBrandCarousel'

export function BrandCarousel() {
  const vm = useBrandCarousel()

  return (
    <section className="bg-ink py-[50px] text-white">
      <Container>
        <Reveal>
          <div className="flex items-baseline justify-between">
            <SectionTitle>Наши бренды</SectionTitle>
            <Link to={ROUTES.brands} className="text-[14px] text-brand transition-colors hover:text-white">
              Все бренды
            </Link>
          </div>
          <div className="relative mt-[30px]">
            <CarouselArrows
              controller={vm.carousel}
              className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 justify-between xl:-mx-[62px]"
              buttonClassName="pointer-events-auto"
            />
            <CarouselTrack
              controller={vm.carousel}
              items={vm.logos}
              getKey={(b) => b.key}
              renderItem={(b) => (
                <BrandTile brand={b} className="h-[80px] rounded-[2px]" imageClassName="h-[80px] w-full p-3" />
              )}
              itemClassName="basis-[calc((100%-20px)/2)] sm:basis-[calc((100%-60px)/4)] lg:basis-[calc((100%-100px)/6)]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
