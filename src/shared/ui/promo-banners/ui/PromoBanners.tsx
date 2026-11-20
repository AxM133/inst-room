import { Link } from 'react-router'
import { cn } from '@/shared/lib'
import { PROMOS } from '../model/promos'

export function PromoBanners({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {PROMOS.map((promo) => (
        <Link key={promo.to} to={promo.to} aria-label={promo.label} className="group block overflow-hidden rounded-[3px]">
          <img
            src={promo.image}
            alt={promo.label}
            loading="lazy"
            className="aspect-[310/200] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      ))}
    </div>
  )
}
