import { BRANDS } from '@/entities/brand'

/** The design repeats the logos to fill 8 rows; keys stay unique. */
const REPEAT = 4

export function useBrandsGrid() {
  return {
    tiles: Array.from({ length: REPEAT }, (_, r) => BRANDS.map((brand) => ({ brand, key: `${brand.id}-${r}` }))).flat(),
  }
}
