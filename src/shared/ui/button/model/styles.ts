import { cn } from '../../../lib'

export type ButtonVariant = 'primary' | 'dark' | 'light' | 'outline'
export type ButtonSize = 'md' | 'lg' | 'block'

const BASE =
  'inline-flex select-none items-center justify-center gap-2 rounded-[4px] font-sans font-medium uppercase ' +
  'tracking-[0.01em] whitespace-nowrap transition-all duration-300 ease-out active:scale-[0.97]'

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white hover:bg-black',
  dark: 'bg-ink text-white hover:bg-brand',
  light: 'border border-line bg-surface text-graphite hover:border-brand hover:bg-brand hover:text-white',
  outline: 'border border-brand bg-white text-brand hover:bg-brand hover:text-white',
}

const SIZES: Record<ButtonSize, string> = {
  md: 'h-[50px] px-8 text-[16px]',
  lg: 'h-[50px] min-w-[308px] px-8 text-[16px]',
  block: 'h-[50px] w-full px-8 text-[16px]',
}

const DISABLED = 'cursor-not-allowed bg-line text-white hover:bg-line active:scale-100'

export const buttonStyles = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  disabled = false,
  className?: string,
) => cn(BASE, SIZES[size], disabled ? DISABLED : VARIANTS[variant], className)
