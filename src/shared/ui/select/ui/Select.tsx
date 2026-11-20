import { cn } from '../../../lib'
import { ChevronIcon } from '../../icons'
import { useSelect, type SelectOption } from '../model/useSelect'

interface SelectProps<T> {
  options: SelectOption<T>[]
  value: T | undefined
  onChange: (value: T) => void
  placeholder?: string
  variant?: 'field' | 'inline'
  className?: string
}

export function Select<T extends string | number>({
  options,
  value,
  onChange,
  placeholder,
  variant = 'field',
  className,
}: SelectProps<T>) {
  const { ref, isOpen, toggle, selected, pick } = useSelect({ options, value, onChange })
  const inline = variant === 'inline'

  return (
    <div ref={ref} className={cn('relative', inline ? 'inline-block' : 'w-full max-w-[380px]', className)}>
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          'flex items-center gap-2 text-left transition-colors',
          inline
            ? 'text-[14px] font-medium hover:text-brand'
            : 'h-10 w-full justify-between border border-line bg-white px-3 text-[16px] hover:border-muted',
          !selected && !inline && 'text-line',
        )}
      >
        <span className="truncate">{selected?.label ?? placeholder}</span>
        <ChevronIcon size={inline ? 14 : 22} direction={isOpen ? 'up' : 'down'} className="shrink-0" />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className={cn(
            'absolute left-0 z-30 mt-2 max-h-[190px] animate-drop-in overflow-y-auto bg-white py-2 shadow-pop scrollbar-thin-brand',
            inline ? 'min-w-[190px]' : 'w-full',
          )}
        >
          {options.map((option) => {
            const active = option.value === value
            return (
              <li key={String(option.value)} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => pick(option.value)}
                  className={cn(
                    'flex w-full items-center gap-2 px-4 py-[7px] text-left text-[14px] transition-colors hover:text-brand',
                    active && 'text-brand',
                  )}
                >
                  {active && !inline && <span className="size-1.5 bg-brand" />}
                  {option.label}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
