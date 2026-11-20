import type { HTMLAttributes } from 'react'
import { cn } from '../../../lib'

export function Container({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mx-auto w-full max-w-[1332px] px-4', className)} {...rest} />
}
