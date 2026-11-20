import type { ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router'
import { buttonStyles, type ButtonSize, type ButtonVariant } from '../model/styles'

interface StyleProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & StyleProps

export function Button({ variant, size, className, disabled, type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonStyles(variant, size, disabled, className)}
      {...rest}
    />
  )
}

export type ButtonLinkProps = LinkProps & StyleProps

export function ButtonLink({ variant, size, className, ...rest }: ButtonLinkProps) {
  return <Link className={buttonStyles(variant, size, false, className)} {...rest} />
}
