import { Link } from 'react-router'
import { cn } from '../../../lib'
import type { Crumb } from '../model/types'

interface BreadcrumbsProps {
  items: Crumb[]
  tone?: 'light' | 'dark'
  className?: string
}

export function Breadcrumbs({ items, tone = 'light', className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Хлебные крошки" className={cn('animate-fade-in pt-[22px] text-[14px] leading-4', className)}>
      <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2.5">
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className={cn(
                    'transition-colors hover:text-brand',
                    tone === 'dark' ? 'text-white' : 'text-muted',
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={tone === 'dark' ? 'text-white' : isLast ? 'text-ink' : 'text-muted'}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className={tone === 'dark' ? 'text-white' : 'text-muted'}>/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
