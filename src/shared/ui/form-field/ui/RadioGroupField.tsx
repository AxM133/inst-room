import type { FieldValues } from 'react-hook-form'
import { cn } from '../../../lib'
import { useChoiceField, type FieldBinding } from '../model/useFormField'

export interface RadioOption<V extends string> {
  value: V
  label: string
  disabled?: boolean
}

interface RadioGroupFieldProps<T extends FieldValues, V extends string> extends FieldBinding<T> {
  options: RadioOption<V>[]
  direction?: 'row' | 'column'
  size?: 'md' | 'sm'
  className?: string
}

export function RadioGroupField<T extends FieldValues, V extends string>({
  options,
  direction = 'row',
  size = 'md',
  className,
  ...binding
}: RadioGroupFieldProps<T, V>) {
  const { value, onChange } = useChoiceField(binding)

  return (
    <div role="radiogroup" className={cn('flex', direction === 'row' ? 'flex-wrap gap-x-[46px] gap-y-3' : 'flex-col gap-3', className)}>
      {options.map((option) => {
        const checked = option.value === value
        return (
          <label
            key={option.value}
            className={cn(
              'group flex cursor-pointer items-center gap-3',
              size === 'md' ? 'text-[16px]' : 'text-[16px]',
              option.disabled && 'pointer-events-none text-line',
            )}
          >
            <input
              type="radio"
              className="peer sr-only"
              checked={checked}
              disabled={option.disabled}
              onChange={() => onChange(option.value)}
            />
            <span
              className={cn(
                'grid size-5 shrink-0 place-items-center rounded-full border transition-all duration-300',
                'peer-focus-visible:ring-2 peer-focus-visible:ring-brand/40',
                option.disabled ? 'border-line bg-surface' : 'border-ink group-hover:border-brand',
              )}
            >
              <span
                className={cn(
                  'size-5 rounded-full bg-ink transition-transform duration-300',
                  checked ? 'scale-100' : 'scale-0',
                )}
              />
            </span>
            {option.label}
          </label>
        )
      })}
    </div>
  )
}
