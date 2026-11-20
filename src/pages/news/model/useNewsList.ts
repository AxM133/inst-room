import { NEWS } from '@/entities/news'

export function useNewsList() {
  return { items: [...NEWS, ...NEWS].map((item, i) => ({ ...item, key: `${item.id}-${i}` })) }
}
