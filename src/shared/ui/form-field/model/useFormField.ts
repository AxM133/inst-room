import type { ChangeEvent } from 'react'
import { useController, type Control, type FieldValues, type Path, type UseControllerProps } from 'react-hook-form'

export interface FieldBinding<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  rules?: UseControllerProps<T>['rules']
}

export function useTextField<T extends FieldValues>(
  { control, name, rules }: FieldBinding<T>,
  mask?: (value: string) => string,
) {
  const { field, fieldState } = useController({ control, name, rules })

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    field.onChange(mask ? mask(event.target.value) : event.target.value)
  }

  const value = (field.value ?? '') as string

  return {
    field,
    value,
    onChange,
    error: fieldState.error?.message,
    isFilled: value.length > 0,
  }
}

export function useChoiceField<T extends FieldValues>({ control, name, rules }: FieldBinding<T>) {
  const { field, fieldState } = useController({ control, name, rules })
  return { value: field.value as string, onChange: field.onChange, error: fieldState.error?.message }
}
