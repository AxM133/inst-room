import { Button, TextField } from '@/shared/ui'
import { usePasswordForm } from '../model/usePasswordForm'

export function PasswordForm() {
  const vm = usePasswordForm()

  return (
    <form onSubmit={vm.onSubmit} noValidate className="mt-5 animate-fade-up rounded-[4px] bg-white px-6 pb-10 pt-10 sm:px-12">
      <h2 className="font-display text-[20px] leading-6">Изменение пароля</h2>
      <div className="mt-6 flex max-w-[310px] flex-col gap-5">
        <TextField control={vm.control} name="oldPassword" label="Старый пароль" type="password" rules={vm.rules.oldPassword} autoComplete="current-password" />
        <TextField control={vm.control} name="newPassword" label="Новый пароль" type="password" rules={vm.rules.newPassword} autoComplete="new-password" />
        <TextField
          control={vm.control}
          name="confirmPassword"
          label="Подтвердите новый пароль"
          type="password"
          rules={vm.rules.confirmPassword}
          success={vm.confirmed}
          hint="Пароль не менее 6 символов, содержит заглавные буквы (A-Z)"
          autoComplete="new-password"
        />
      </div>
      <div className="mt-8 flex items-center gap-5">
        <Button type="submit" variant="primary" disabled={!vm.canSubmit} className="px-8 text-[16px]">
          Изменить пароль
        </Button>
        {vm.done && <span className="animate-fade-in text-[14px] text-success">Пароль изменён</span>}
      </div>
    </form>
  )
}
