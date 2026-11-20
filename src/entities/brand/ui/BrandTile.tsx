import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import type { Brand } from '../model/types'

interface BrandTileProps {
  brand: Brand
  className?: string
  imageClassName?: string
}

export function BrandTile({ brand, className, imageClassName }: BrandTileProps) {
  return (
    <Link
      to={ROUTES.brand(brand.id)}
      title={brand.name}
      className={cn(
        'group grid place-items-center overflow-hidden bg-white transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-card',
        className,
      )}
    >
      <img
        src={brand.logo}
        alt={brand.name}
        loading="lazy"
        className={cn('object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105', imageClassName)}
      />
    </Link>
  )
}
