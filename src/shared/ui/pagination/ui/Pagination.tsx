import { cn } from '../../../lib'
import { ChevronIcon } from '../../icons'
import { getPageWindow } from '../model/usePagination'

interface PaginationProps {
  page: number
  totalPages: number
  onChange: (page: number) => void
  className?: string
}

export function Pagination({ page, totalPages, onChange, className }: PaginationProps) {
  if (totalPages <= 1) return null
  const pages = getPageWindow(page, totalPages)

  return (
    <nav aria-label="Страницы" className={cn('flex items-center justify-center gap-2', className)}>
      <button
        type="button"
        aria-label="Предыдущая страница"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        className="grid size-8 place-items-center text-black transition-all hover:text-brand disabled:text-line"
      >
        <ChevronIcon size={20} direction="left" />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          aria-current={p === page ? 'page' : undefined}
          onClick={() => onChange(p)}
          className={cn(
            'grid h-[26px] min-w-[26px] place-items-center px-1 text-[14px] font-medium transition-all duration-300',
            p === page ? 'scale-110 bg-brand text-white' : 'text-black hover:text-brand',
          )}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        aria-label="Следующая страница"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        className="grid size-8 place-items-center text-black transition-all hover:text-brand disabled:text-line"
      >
        <ChevronIcon size={20} direction="right" />
      </button>
    </nav>
  )
}
