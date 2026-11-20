import { useParams } from 'react-router'
import { ROUTES } from '@/shared/config'
import type { Crumb } from '@/shared/ui'
import { getArticle } from '@/entities/news'

export function useArticle() {
  const { id } = useParams()
  const article = getArticle(id)
  const crumbs: Crumb[] = [
    { label: 'Главная', to: ROUTES.home },
    { label: 'Новости', to: ROUTES.news },
    { label: article?.title ?? 'Новость' },
  ]
  return { article, crumbs }
}
