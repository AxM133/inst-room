import { CarouselArrows, CarouselTrack, SectionTitle } from '@/shared/ui'
import type { Product } from '@/entities/product'
import { ProductCard } from '@/widgets/product-card'
import { useProductRail } from '../model/useRelatedProducts'

export function ProductRail({ title, products }: { title: string; products: Product[] }) {
  const carousel = useProductRail(products.length)
  if (!products.length) return null

  return (
    <section className="mt-[60px]">
      <div className="mb-[18px] flex items-center justify-between">
        <SectionTitle>{title}</SectionTitle>
        <CarouselArrows controller={carousel} />
      </div>
      <CarouselTrack
        controller={carousel}
        items={products}
        getKey={(p) => p.id}
        renderItem={(p) => <ProductCard product={p} />}
        itemClassName="basis-[85%] sm:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-60px)/4)]"
      />
    </section>
  )
}
