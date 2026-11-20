import { cn } from '../../../lib'
import { RefreshIcon } from '../../icons'

interface ShowMoreButtonProps {
  onClick: () => void
  className?: string
}

export function ShowMoreButton({ onClick, className }: ShowMoreButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group flex h-[46px] w-full items-center justify-center gap-2 rounded-[2px] border border-surface bg-white text-[14px] font-medium',
        'transition-all duration-300 hover:border-brand hover:text-brand',
        className,
      )}
    >
      <RefreshIcon size={20} className="text-brand transition-transform duration-500 group-hover:rotate-180" />
      Показать ещё
    </button>
  )
}
