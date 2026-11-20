import { Link } from 'react-router'
import { ROUTES } from '../../../config'
import { cn } from '../../../lib'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      to={ROUTES.home}
      aria-label="Inst room — на главную"
      className={cn(
        'group inline-flex flex-col font-display text-[22px] leading-[20px] text-white transition-opacity hover:opacity-90',
        className,
      )}
    >
      <span>
        <span className="text-brand">I</span>nst
      </span>
      <span className="flex items-center gap-1">
        <span className="inline-block size-[14px] bg-brand transition-transform duration-300 group-hover:rotate-90" />
        <span>
          roo<span className="text-brand">m</span>
        </span>
      </span>
    </Link>
  )
}
