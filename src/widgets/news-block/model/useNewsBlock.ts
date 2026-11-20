import { ROUTES } from '@/shared/config'
import { NEWS } from '@/entities/news'

export function useNewsBlock() {
  return { items: NEWS.slice(0, 4), allLink: ROUTES.news }
}
