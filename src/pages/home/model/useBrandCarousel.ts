import { useCarousel } from '@/shared/ui'
import { BRANDS } from '@/entities/brand'

/** The design shows 6 logos, so we repeat the 8 brands to make scrolling feel natural. */
const LOGOS = [...BRANDS, ...BRANDS].map((brand, index) => ({ ...brand, key: `${brand.id}-${index}` }))

export function useBrandCarousel() {
  const carousel = useCarousel(LOGOS.length)
  return { carousel, logos: LOGOS }
}
