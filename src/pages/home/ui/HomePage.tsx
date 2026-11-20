import { AboutCompany } from './AboutCompany'
import { BrandCarousel } from './BrandCarousel'
import { CategoryShowcase } from './CategoryShowcase'
import { HeroBanners } from './HeroBanners'
import { NewsBlock } from '@/widgets/news-block'
import { ProductShowcase } from './ProductShowcase'

export function HomePage() {
  return (
    <>
      <HeroBanners />
      <CategoryShowcase />
      <BrandCarousel />
      <AboutCompany />
      <ProductShowcase />
      <NewsBlock />
    </>
  )
}
