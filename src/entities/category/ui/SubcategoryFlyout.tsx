import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import type { Category } from '../model/types'

interface SubcategoryFlyoutProps {
  category: Category
  onNavigate?: () => void
}

export function SubcategoryFlyout({ category, onNavigate }: SubcategoryFlyoutProps) {
  return (
    <ul key={category.slug} className="grid animate-fade-in gap-x-10 gap-y-[18px] p-8 sm:grid-cols-2">
      {category.children.map((item) => (
        <li key={item.slug}>
          <Link
            to={ROUTES.category(item.slug)}
            onClick={onNavigate}
            className="text-[16px] leading-5 transition-colors duration-200 hover:text-brand"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
