import { Button, ConsentNote, TextField } from '@/shared/ui'
import { useRegisterForm } from '../model/useRegisterForm'

export function RegisterForm() {
  const vm = useRegisterForm()

  return (
    <form onSubmit={vm.onSubmit} noValidate className="flex animate-fade-in flex-col gap-[22px]">
      <TextField control={vm.control} name="lastName" label="Фамилия" autoComplete="family-name" rules={vm.rules.lastName} />
      <TextField control={vm.control} name="firstName" label="Имя" autoComplete="given-name" rules={vm.rules.firstName} />
      <TextField
        control={vm.control}
        name="phone"
        label="Телефон"
        type="tel"
        placeholder="+7"
        mask={vm.maskPhone}
        rules={vm.rules.phone}
      />
      <TextField control={vm.control} name="email" label="Электронная почта" type="email" autoComplete="email" rules={vm.rules.email} />
      <TextField control={vm.control} name="password" label="Пароль" type="password" autoComplete="new-password" rules={vm.rules.password} />
      <TextField
        control={vm.control}
        name="passwordConfirm"
        label="Подтвердите пароль"
        type="password"
        autoComplete="new-password"
        rules={vm.rules.passwordConfirm}
      />
      <div className="pt-3">
        <Button type="submit" variant="dark" size="block">
          Регистрация
        </Button>
        <ConsentNote className="mt-3" />
        <button type="button" onClick={vm.switchToLogin} className="mt-4 text-[14px] text-muted transition-colors hover:text-brand">
          Уже есть аккаунт? Войти
        </button>
      </div>
    </form>
  )
}
