import { Button, ConsentNote, TextField } from '@/shared/ui'
import { useLoginForm } from '../model/useLoginForm'

export function LoginForm() {
  const vm = useLoginForm()

  if (vm.step === 'code') {
    return (
      <form onSubmit={vm.onSubmit} noValidate className="animate-slide-left">
        <h2 className="mb-8 text-center font-display text-[20px] leading-6">Введите код из СМС</h2>
        <TextField
          control={vm.control}
          name="code"
          label="4 цифры"
          type="password"
          autoComplete="one-time-code"
          rules={vm.rules.code}
          inputClassName="tracking-[0.3em]"
        />
        <div className="mt-3 flex items-start justify-between gap-4 text-[12px] leading-4">
          <span>Код отправлен на номер:</span>
          <span className="text-right">
            <span className="block text-[14px]">{vm.maskedPhone}</span>
            <button type="button" onClick={vm.changePhone} className="text-muted transition-colors hover:text-brand">
              Изменить
            </button>
          </span>
        </div>
        <div className="mt-[88px] text-right text-[12px] leading-4 text-muted">
          {vm.canResend ? (
            <button type="button" onClick={vm.resend} className="text-brand hover:underline">
              Отправить код ещё раз
            </button>
          ) : (
            <>Отправить код ещё раз можно через {vm.timerLabel}</>
          )}
        </div>
      </form>
    )
  }

  return (
    <form onSubmit={vm.onSubmit} noValidate className="animate-fade-in">
      <h2 className="mb-8 text-center font-display text-[20px] leading-6">Вход</h2>
      <TextField
        control={vm.control}
        name="phone"
        label="Телефон"
        type="tel"
        placeholder="+7"
        autoComplete="tel"
        mask={vm.maskPhone}
        rules={vm.rules.phone}
      />
      <Button type="submit" variant="dark" size="block" className="mt-[60px]">
        Получить код
      </Button>
      <ConsentNote className="mt-3" />
      <button type="button" onClick={vm.switchToRegister} className="mt-5 text-[14px] text-muted transition-colors hover:text-brand">
        Нет аккаунта? Зарегистрироваться
      </button>
    </form>
  )
}
