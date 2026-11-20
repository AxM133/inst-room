import type { FieldValues } from 'react-hook-form'
import { cn } from '../../../lib'
import { useTextField, type FieldBinding } from '../model/useFormField'

interface TextAreaFieldProps<T extends FieldValues> extends FieldBinding<T> {
  label: string
  placeholder?: string
  rows?: number
  className?: string
}

export function TextAreaField<T extends FieldValues>({
  label,
  placeholder,
  rows = 4,
  className,
  ...binding
}: TextAreaFieldProps<T>) {
  const { field, value, onChange, error } = useTextField(binding)

  return (
    <label className={cn('block', className)}>
      <span className={cn('block font-display text-[12px] leading-[14px]', error ? 'text-brand-light' : 'text-muted')}>
        {label}
      </span>
      <textarea
        ref={field.ref}
        name={field.name}
        value={value}
        onChange={onChange}
        onBlur={field.onBlur}
        rows={rows}
        placeholder={placeholder}
        className={cn(
          'mt-2 block w-full resize-none rounded-[2px] border bg-white p-3 text-[14px] leading-5 outline-none',
          'transition-colors duration-300 placeholder:text-line focus:border-black',
          error ? 'border-brand-light' : 'border-line',
        )}
      />
      {error && <span className="mt-1 block text-[12px] text-brand-light">{error}</span>}
    </label>
  )
}
