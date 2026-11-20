import { useState } from 'react'
import { useForm } from 'react-hook-form'

export interface PasswordValues {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

export function usePasswordForm() {
  const form = useForm<PasswordValues>({
    mode: 'onChange',
    defaultValues: { oldPassword: '', newPassword: '', confirmPassword: '' },
  })
  const [done, setDone] = useState(false)
  const [oldPassword, newPassword, confirmPassword] = form.watch(['oldPassword', 'newPassword', 'confirmPassword'])

  const strong = newPassword.length >= 6 && /[A-Z]/.test(newPassword)
  const confirmed = confirmPassword.length > 0 && confirmPassword === newPassword && strong

  const onSubmit = form.handleSubmit(() => {
    form.reset()
    setDone(true)
    window.setTimeout(() => setDone(false), 2500)
  })

  return {
    control: form.control,
    onSubmit,
    confirmed,
    done,
    canSubmit: Boolean(oldPassword) && confirmed,
    rules: {
      oldPassword: { required: 'Введите старый пароль' },
      newPassword: { validate: (v: string) => v.length === 0 || (v.length >= 6 && /[A-Z]/.test(v)) || 'Пароль не менее 6 символов, содержит заглавные буквы (A-Z)' },
      confirmPassword: { validate: (v: string) => v.length === 0 || v === newPassword || 'Пароли не совпадают' },
    },
  }
}
