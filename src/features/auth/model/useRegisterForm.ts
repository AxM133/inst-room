import { useForm } from 'react-hook-form'
import { closeModal, isFullPhone, maskPhone, openModal } from '@/shared/lib'
import { signUp } from '@/entities/user'

export interface RegisterValues {
  lastName: string
  firstName: string
  phone: string
  email: string
  password: string
  passwordConfirm: string
}

const TAKEN_EMAILS = ['cmirnoval@gmail.com', 'test@test.ru']
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function useRegisterForm() {
  const form = useForm<RegisterValues>({
    mode: 'onTouched',
    defaultValues: { lastName: '', firstName: '', phone: '', email: '', password: '', passwordConfirm: '' },
  })

  const password = form.watch('password')

  const onSubmit = form.handleSubmit((values) => {
    signUp({
      lastName: values.lastName,
      firstName: values.firstName,
      phone: values.phone,
      email: values.email,
    })
    closeModal()
    openModal({ kind: 'thanks', title: 'Вы зарегистрированы', text: 'Добро пожаловать в Inst room! Личный кабинет уже доступен.', cta: 'На главную' })
  })

  const required = { required: 'Обязательное поле' }

  return {
    control: form.control,
    onSubmit,
    maskPhone,
    rules: {
      lastName: required,
      firstName: required,
      phone: { validate: (v: string) => isFullPhone(v) || 'Введите номер телефона полностью' },
      email: {
        ...required,
        validate: (v: string) =>
          !EMAIL_RE.test(v) ? 'Введите корректный email' : TAKEN_EMAILS.includes(v.toLowerCase()) ? 'Пользователь с таким email уже существует' : true,
      },
      password: {
        ...required,
        validate: (v: string) => (v.length >= 6 && /[A-Z]/.test(v) ? true : 'Пароль не менее 6 символов,\nсодержит заглавные буквы (A-Z)'),
      },
      passwordConfirm: { ...required, validate: (v: string) => v === password || 'Пароли не совпадают' },
    },
    switchToLogin: () => openModal({ kind: 'login' }),
  }
}
