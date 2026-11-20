import { useForm } from 'react-hook-form'
import { isFullPhone, maskPhone, openModal } from '@/shared/lib'

export interface CallbackValues {
  name: string
  phone: string
  comment: string
}

export function useCallbackForm() {
  const form = useForm<CallbackValues>({ defaultValues: { name: '', phone: '', comment: '' } })

  const onSubmit = form.handleSubmit(() => {
    openModal({
      kind: 'thanks',
      title: 'Ваша заявка принята',
      text: 'Спасибо за заявку! Мы свяжемся с вами в ближайшее время',
      cta: 'На главную',
    })
  })

  return {
    control: form.control,
    onSubmit,
    maskPhone,
    rules: {
      name: { required: 'Укажите имя' },
      phone: { validate: (v: string) => isFullPhone(v) || 'Введите номер телефона полностью' },
    },
  }
}
