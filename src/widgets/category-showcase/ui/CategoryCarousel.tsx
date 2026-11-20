import { CarouselArrows, CarouselTrack, SectionTitle } from '@/shared/ui'
import { ProductCard } from '@/widgets/product-card'
import { useCategoryCarousel } from '../model/useCategoryCarousel'

export function CategoryCarousel({ slug }: { slug: string }) {
  const vm = useCategoryCarousel(slug)

  return (
    <section className="min-w-0">
      <div className="mb-[18px] flex items-center gap-5">
        <SectionTitle>{vm.title}</SectionTitle>
        <CarouselArrows controller={vm.carousel} />
      </div>
      <CarouselTrack
        controller={vm.carousel}
        items={vm.products}
        getKey={(p) => p.id}
        renderItem={(p) => <ProductCard product={p} />}
        itemClassName="basis-[85%] sm:basis-[calc((100%-20px)/2)]"
      />
    </section>
  )
}
