import type { CSSProperties, HTMLAttributes } from 'react'
import { cn } from '../../../lib'
import { useReveal } from '../model/useReveal'

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number
  direction?: 'up' | 'left' | 'none'
}

const HIDDEN = {
  up: 'translate-y-8 opacity-0',
  left: 'translate-x-8 opacity-0',
  none: 'opacity-0',
}

export function Reveal({ delay = 0, direction = 'up', className, style, ...rest }: RevealProps) {
  const { ref, visible } = useReveal()
  const motionStyle: CSSProperties = { transitionDelay: `${delay}ms`, ...style }

  return (
    <div
      ref={ref}
      style={motionStyle}
      className={cn(
        'transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
        visible ? 'translate-x-0 translate-y-0 opacity-100' : HIDDEN[direction],
        className,
      )}
      {...rest}
    />
  )
}
