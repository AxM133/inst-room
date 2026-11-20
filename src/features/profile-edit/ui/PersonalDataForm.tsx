import { Button, TextField } from '@/shared/ui'
import { usePersonalForm } from '../model/usePersonalForm'

export function PersonalDataForm() {
  const vm = usePersonalForm()

  return (
    <form onSubmit={vm.onSubmit} noValidate className="animate-fade-up rounded-[4px] bg-white px-6 pb-10 pt-10 sm:px-12">
      <h2 className="font-display text-[20px] leading-6">Личные данные</h2>
      <div className="mt-6 grid gap-x-[190px] gap-y-6 lg:grid-cols-2">
        <div className="flex max-w-[310px] flex-col gap-5">
          <TextField control={vm.control} name="lastName" label="Фамилия" rules={vm.rules.lastName} />
          <TextField control={vm.control} name="firstName" label="Имя" rules={vm.rules.firstName} />
          <TextField control={vm.control} name="phone" label="Телефон" type="tel" mask={vm.maskPhone} rules={vm.rules.phone} />
          <TextField control={vm.control} name="email" label="Электронная почта" type="email" rules={vm.rules.email} />
        </div>
        <div className="flex max-w-[310px] flex-col gap-5">
          <TextField control={vm.control} name="city" label="Город" />
          <TextField control={vm.control} name="street" label="Улица" />
          <TextField control={vm.control} name="building" label="Корпус" />
          <div className="grid grid-cols-2 gap-x-6">
            <TextField control={vm.control} name="house" label="Дом" />
            <TextField control={vm.control} name="flat" label="Квартира" />
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-5">
        <Button type="submit" variant="primary" disabled={!vm.canSave} className="px-8 text-[16px]">
          Сохранить изменения
        </Button>
        {vm.saved && <span className="animate-fade-in text-[14px] text-success">Изменения сохранены</span>}
      </div>
    </form>
  )
}
