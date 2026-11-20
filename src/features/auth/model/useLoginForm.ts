import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { closeModal, formatTimer, isFullPhone, maskPhone, maskPhoneTail, openModal, useCountdown } from '@/shared/lib'
import { signIn } from '@/entities/user'

export interface LoginValues {
  phone: string
  code: string
}

type Step = 'phone' | 'code'

export function useLoginForm() {
  const form = useForm<LoginValues>({ defaultValues: { phone: '', code: '' } })
  const [step, setStep] = useState<Step>('phone')
  const timer = useCountdown(59)
  const phone = form.watch('phone')
  const code = form.watch('code')

  const requestCode = () => {
    setStep('code')
    timer.restart()
  }

  const confirmCode = () => {
    signIn(phone)
    closeModal()
  }

  /* the code field has exactly 4 digits — log in right away */
  useEffect(() => {
    if (step === 'code' && /^\d{4}$/.test(code)) {
      signIn(phone)
      closeModal()
    }
  }, [code, step, phone])

  const changePhone = () => {
    form.setValue('code', '')
    setStep('phone')
  }

  const resend = () => {
    form.setValue('code', '')
    timer.restart()
  }

  return {
    control: form.control,
    step,
    onSubmit: form.handleSubmit(step === 'phone' ? requestCode : confirmCode),
    changePhone,
    switchToRegister: () => openModal({ kind: 'register' }),
    resend,
    maskedPhone: maskPhoneTail(phone),
    timerLabel: formatTimer(timer.left),
    canResend: timer.isFinished,
    maskPhone,
    rules: {
      phone: { validate: (v: string) => isFullPhone(v) || 'Введите номер телефона полностью' },
      code: { validate: (v: string) => /^\d{4}$/.test(v) || 'Введите 4 цифры из СМС' },
    },
  }
}
