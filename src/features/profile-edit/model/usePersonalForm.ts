import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { isFullPhone, maskPhone } from '@/shared/lib'
import { updateProfile, useUser, type Profile } from '@/entities/user'

export function usePersonalForm() {
  const { profile } = useUser()
  const form = useForm<Profile>({ mode: 'onChange', defaultValues: profile })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!saved) return
    const id = window.setTimeout(() => setSaved(false), 2500)
    return () => window.clearTimeout(id)
  }, [saved])

  const onSubmit = form.handleSubmit((values) => {
    updateProfile(values)
    form.reset(values)
    setSaved(true)
  })

  const required = { required: 'Обязательное поле' }

  return {
    control: form.control,
    onSubmit,
    canSave: form.formState.isDirty,
    saved,
    maskPhone,
    rules: {
      lastName: required,
      firstName: required,
      phone: { validate: (v: string) => isFullPhone(v) || 'Введите номер телефона полностью' },
      email: { ...required, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Введите корректный email' } },
    },
  }
}
