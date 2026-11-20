import { BANNER_IMAGES as IMG } from '@/shared/assets'
import { ROUTES } from '@/shared/config'

export interface HeroBanner {
  id: string
  title: string
  to: string
  image: string
  /** the first banner has a CTA button baked into the artwork */
  cta?: string
  className: string
}

export const HERO_BANNERS: HeroBanner[] = [
  {
    id: 'main',
    title: 'DeWALT — Инструмент с настоящим характером',
    to: ROUTES.category('tools'),
    image: IMG.heroMain,
    cta: 'Перейти в каталог',
    className: 'aspect-[640/490] lg:aspect-auto lg:row-span-2',
  },
  { id: 'promo', title: 'Акции', to: ROUTES.category('sale'), image: IMG.heroPromo, className: 'aspect-[311/488] lg:aspect-auto lg:row-span-2' },
  { id: 'new', title: 'Новое поступление', to: ROUTES.category('new'), image: IMG.heroNew, className: 'aspect-[310/233] lg:aspect-auto' },
  { id: 'drill', title: 'Акции на сверла', to: ROUTES.category('sale'), image: IMG.heroDrill, className: 'aspect-[310/237] lg:aspect-auto' },
]
