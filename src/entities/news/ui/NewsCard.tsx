import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import type { NewsItem } from '../model/types'

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link to={ROUTES.newsItem(item.id)} className="group block">
      <div className="aspect-[420/203] overflow-hidden rounded-[3px] bg-line">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-3 font-display text-[16px] leading-5 transition-colors group-hover:text-brand">{item.title}</h3>
      <p className="mt-1.5 text-[14px] leading-4 text-graphite">{item.date}</p>
    </Link>
  )
}
