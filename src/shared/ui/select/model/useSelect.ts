import { useCallback, useMemo, useRef } from 'react'
import { useDisclosure } from '../../../lib/useDisclosure'
import { useOutsideClick } from '../../../lib/useOutsideClick'

export interface SelectOption<T> {
  value: T
  label: string
}

interface Params<T> {
  options: SelectOption<T>[]
  value: T | undefined
  onChange: (value: T) => void
}

export function useSelect<T>({ options, value, onChange }: Params<T>) {
  const { isOpen, close, toggle } = useDisclosure()
  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, close, isOpen)

  const selected = useMemo(() => options.find((o) => o.value === value), [options, value])

  const pick = useCallback(
    (next: T) => {
      onChange(next)
      close()
    },
    [onChange, close],
  )

  return { ref, isOpen, toggle, selected, pick }
}
