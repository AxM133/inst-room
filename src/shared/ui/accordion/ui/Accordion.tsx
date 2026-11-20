import type { ReactNode } from 'react'
import { cn } from '../../../lib'
import { ChevronIcon } from '../../icons'
import { useAccordion } from '../model/useAccordion'

interface AccordionProps {
  title: ReactNode
  defaultOpen?: boolean
  className?: string
  headerClassName?: string
  bodyClassName?: string
  iconSize?: number
  children: ReactNode
}

export function Accordion({
  title,
  defaultOpen = false,
  className,
  headerClassName,
  bodyClassName,
  iconSize = 22,
  children,
}: AccordionProps) {
  const { isOpen, toggle } = useAccordion(defaultOpen)

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={toggle}
        className={cn('flex w-full items-center justify-between gap-4 text-left', headerClassName)}
      >
        <span className="min-w-0 flex-1">{title}</span>
        <ChevronIcon size={iconSize} direction={isOpen ? 'up' : 'down'} className="shrink-0" />
      </button>
      <div
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className={bodyClassName}>{children}</div>
        </div>
      </div>
    </div>
  )
}
