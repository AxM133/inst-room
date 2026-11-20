import type { HTMLAttributes } from 'react'
import { cn } from '../../../lib'

export function PageTitle({ className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn('animate-fade-up font-display text-[28px] leading-9 sm:text-[40px] sm:leading-[48px]', className)}
      {...rest}
    />
  )
}

export function SectionTitle({ className, ...rest }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn('font-display text-[24px] leading-8 sm:text-[30px]', className)} {...rest} />
}
