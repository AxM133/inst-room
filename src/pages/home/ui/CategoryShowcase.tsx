import { Container, Reveal } from '@/shared/ui'
import { SHOWCASE_SECTIONS } from '../model/sections'
import { CategoryCarousel } from './CategoryCarousel'

export function CategoryShowcase() {
  return (
    <Container className="grid grid-cols-[minmax(0,1fr)] gap-x-5 gap-y-[50px] py-[60px] lg:grid-cols-2">
      {SHOWCASE_SECTIONS.map((section, index) => (
        <Reveal key={section.slug} delay={(index % 2) * 120} className="min-w-0">
          <CategoryCarousel slug={section.slug} />
        </Reveal>
      ))}
    </Container>
  )
}
