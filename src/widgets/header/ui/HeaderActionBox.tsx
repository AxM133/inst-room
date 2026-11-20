import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'
import { CounterBadge } from '@/shared/ui'

interface HeaderActionBoxProps {
  label: string
  count?: number
  active?: boolean
  onClick?: () => void
  children: ReactNode
}

export const ACTION_BOX =
  'relative grid size-14 place-items-center sm:size-24 border-l border-ink/60 text-white transition-colors duration-300 first:border-0'

export function HeaderActionBox({ label, count, active, onClick, children }: HeaderActionBoxProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn(ACTION_BOX, active ? 'bg-brand' : 'bg-graphite hover:bg-brand/90')}
    >
      <span className="transition-transform duration-300 group-hover:scale-110">{children}</span>
      {count !== undefined && (
        <CounterBadge value={count} className={cn('absolute right-1.5 top-1.5 sm:right-[26px] sm:top-[24px]', active && 'bg-graphite')} />
      )}
    </button>
  )
}
