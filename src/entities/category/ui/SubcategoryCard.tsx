import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import type { Subcategory } from '../model/types'

export function SubcategoryCard({ item }: { item: Subcategory }) {
  return (
    <Link
      to={ROUTES.category(item.slug)}
      className="group block overflow-hidden rounded-[4px] bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="grid aspect-[310/288] place-items-center overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex min-h-12 items-center justify-center bg-ink px-3 py-3 text-center text-[14px] leading-4 text-white transition-colors duration-300 group-hover:bg-brand">
        {item.title}
      </div>
    </Link>
  )
}
