import { cn } from '../../../lib'
import { CheckIcon } from '../../icons'

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
  count?: number
  className?: string
}

export function Checkbox({ checked, onChange, label, count, className }: CheckboxProps) {
  return (
    <label className={cn('group flex cursor-pointer items-center gap-2.5 text-[14px] leading-5', className)}>
      <input type="checkbox" className="peer sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span
        className={cn(
          'grid size-[14px] shrink-0 place-items-center transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-brand',
          checked ? 'bg-brand' : 'bg-white group-hover:bg-line',
        )}
      >
        <CheckIcon size={11} className={cn('text-white transition-transform duration-200', checked ? 'scale-100' : 'scale-0')} />
      </span>
      <span className={cn('transition-colors', checked && 'text-brand')}>{label}</span>
      {count !== undefined && <span className="text-[10px] text-muted">{count}</span>}
    </label>
  )
}

interface RadioProps {
  checked: boolean
  onChange: () => void
  label: string
  className?: string
}

export function Radio({ checked, onChange, label, className }: RadioProps) {
  return (
    <label className={cn('group flex cursor-pointer items-center gap-2.5 text-[14px] leading-5', className)}>
      <input type="radio" className="peer sr-only" checked={checked} onChange={onChange} />
      <span className="grid size-[14px] shrink-0 place-items-center rounded-full bg-white">
        <span
          className={cn(
            'size-[14px] rounded-full bg-brand transition-transform duration-300',
            checked ? 'scale-100' : 'scale-0 group-hover:scale-50 group-hover:bg-line',
          )}
        />
      </span>
      {label}
    </label>
  )
}
