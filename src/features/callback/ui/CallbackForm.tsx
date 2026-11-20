import { Button, ConsentNote, TextAreaField, TextField } from '@/shared/ui'
import { useCallbackForm } from '../model/useCallbackForm'

export function CallbackForm() {
  const vm = useCallbackForm()

  return (
    <form onSubmit={vm.onSubmit} noValidate className="flex flex-col gap-[22px]">
      <TextField control={vm.control} name="name" label="Имя" autoComplete="name" rules={vm.rules.name} />
      <TextField
        control={vm.control}
        name="phone"
        label="Телефон"
        type="tel"
        placeholder="+7"
        mask={vm.maskPhone}
        rules={vm.rules.phone}
      />
      <TextAreaField control={vm.control} name="comment" label="Комментарий" rows={4} />
      <div className="pt-1">
        <Button type="submit" variant="dark" size="block">
          Отправить
        </Button>
        <ConsentNote className="mt-3" />
      </div>
    </form>
  )
}
