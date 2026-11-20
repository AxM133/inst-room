import { BANNER_IMAGES } from '@/shared/assets'
import { ROUTES } from '@/shared/config'

export const PROMOS = [
  { image: BANNER_IMAGES.sideSnow, to: ROUTES.category('seasonal'), label: 'Новое поступление' },
  { image: BANNER_IMAGES.sideStove, to: ROUTES.category('home'), label: 'Печи со скидкой' },
]
