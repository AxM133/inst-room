import { BRAND_IMAGES as IMG } from '@/shared/assets'
import type { Brand } from './types'

const DESCRIPTION =
  'Представлен линейкой наиболее востребованных лакокрасочных материалов, выгодно отличающихся от аналогичных продуктов соотношением цена/качество. Грунтовки, шпатлёвки, акриловые краски, алкидные эмали, клей и олифа, растворители, защитно-красящий состав — все эти материалы экономичны и практичны.'

export const BRANDS: Brand[] = [
  { id: 'truper', name: 'Truper', logo: IMG.truper, description: DESCRIPTION },
  { id: 'ceresit', name: 'Ceresit', logo: IMG.ceresit, description: DESCRIPTION },
  { id: 'snezka', name: 'Śnieżka', logo: IMG.snezka, description: DESCRIPTION },
  { id: 'pfizer', name: 'Pfizer', logo: IMG.pfizer, description: DESCRIPTION },
  { id: 'kapro', name: 'Kapro', logo: IMG.kapro, description: DESCRIPTION },
  { id: 'finland', name: 'Finland', logo: IMG.finland, description: DESCRIPTION },
  { id: 'farbitex', name: 'Farbitex', logo: IMG.farbitex, description: DESCRIPTION },
  { id: 'centro', name: 'Центр инструмент', logo: IMG.centro, description: DESCRIPTION },
]

export const getBrand = (id: string | undefined): Brand | undefined => BRANDS.find((b) => b.id === id)
