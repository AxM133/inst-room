import type { HTMLInputTypeAttribute } from 'react'
import type { FieldValues } from 'react-hook-form'
import { cn } from '../../../lib'
import { CheckCircleIcon } from '../../icons'
import { useTextField, type FieldBinding } from '../model/useFormField'

interface TextFieldProps<T extends FieldValues> extends FieldBinding<T> {
  label: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  autoComplete?: string
  hint?: string
  /** Show the green check (design: confirmed password) */
  success?: boolean
  mask?: (value: string) => string
  /** Label becomes bold black — used for computed read-only values */
  strongLabel?: boolean
  readOnly?: boolean
  className?: string
  inputClassName?: string
  suffix?: React.ReactNode
}

export function TextField<T extends FieldValues>({
  label,
  type = 'text',
  placeholder,
  autoComplete,
  hint,
  success,
  mask,
  strongLabel,
  readOnly,
  className,
  inputClassName,
  suffix,
  ...binding
}: TextFieldProps<T>) {
  const { field, value, onChange, error, isFilled } = useTextField(binding, mask)

  return (
    <label className={cn('block', className)}>
      <span
        className={cn(
          'block font-display text-[12px] leading-[14px] transition-colors',
          error ? 'text-brand-light' : strongLabel ? 'text-black' : 'text-muted',
        )}
      >
        {label}
      </span>
      <span className="relative block">
        <input
          ref={field.ref}
          name={field.name}
          value={value}
          onChange={onChange}
          onBlur={field.onBlur}
          type={type}
          readOnly={readOnly}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={cn(
            'mt-1 h-9 w-full border-0 border-b bg-transparent pr-8 text-[16px] leading-5 outline-none',
            'transition-colors duration-300 placeholder:text-line focus:border-black',
            error ? 'border-brand-light text-brand-light' : isFilled ? 'border-black' : 'border-muted/70',
            inputClassName,
          )}
        />
        {success && !error && (
          <CheckCircleIcon size={22} className="absolute right-0 top-1/2 -translate-y-1/2 animate-pop text-[#27ae60]" />
        )}
        {suffix && <span className="absolute right-0 top-1/2 -translate-y-1/2">{suffix}</span>}
      </span>
      {error ? (
        <span className="mt-1 block animate-drop-in whitespace-pre-line text-[12px] leading-4 text-brand-light">{error}</span>
      ) : (
        hint && <span className="mt-1 block text-[12px] leading-4 text-muted">{hint}</span>
      )}
    </label>
  )
}
