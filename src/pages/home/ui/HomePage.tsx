import { AboutCompany } from '@/widgets/about-company'
import { BrandCarousel } from '@/widgets/brand-carousel'
import { CategoryShowcase } from '@/widgets/category-showcase'
import { HeroBanners } from '@/widgets/hero-banners'
import { NewsBlock } from '@/widgets/news-block'
import { ProductShowcase } from '@/widgets/product-showcase'

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
