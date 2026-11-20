import { ROUTES } from '@/shared/config'
import { Button, ButtonLink, ConsentNote, RadioGroupField, Select, Tabs, TextField } from '@/shared/ui'
import { PICKUP_POINTS, useCheckout, type CheckoutStep } from '../model/useCheckout'
import { CheckoutSummary } from './CheckoutSummary'

const TAB_ITEMS: Array<{ value: CheckoutStep; label: string }> = [
  { value: 'buyer', label: 'Данные покупателя' },
  { value: 'delivery', label: 'Доставка' },
  { value: 'payment', label: 'Оплата' },
]

const DELIVERY_OPTIONS = [
  { value: 'courier', label: 'Доставка курьером' },
  { value: 'pickup', label: 'Самовывоз' },
] as const

const PAYMENT_OPTIONS = [
  { value: 'receipt', label: 'Оплата при получении' },
  { value: 'online', label: 'Оплата онлайн' },
] as const

const RECEIPT_OPTIONS = [
  { value: 'cash', label: 'наличными' },
  { value: 'card', label: 'банковской картой' },
] as const

const PICKUP_OPTIONS = PICKUP_POINTS.map((point) => ({ value: point, label: point }))

export function CheckoutFlow() {
  const vm = useCheckout()

  if (vm.isEmpty) {
    return (
      <div className="animate-fade-up bg-white p-10 text-center">
        <p className="font-display text-[24px]">В корзине нет товаров</p>
        <p className="mt-3 text-muted">Добавьте товары, чтобы оформить заказ</p>
        <ButtonLink to={ROUTES.catalog} className="mt-6">
          Перейти в каталог
        </ButtonLink>
      </div>
    )
  }

  const tabs = TAB_ITEMS.map((tab, index) => ({ ...tab, disabled: index > vm.reached }))

  return (
    <div className="grid animate-fade-up items-start gap-6 lg:grid-cols-[1fr_420px] lg:gap-0">
      <form onSubmit={vm.submit} noValidate className="min-h-[380px] bg-white px-6 pb-12 pt-8 sm:px-10 lg:min-h-[478px]">
        <Tabs variant="checkout" items={tabs} value={vm.step} onChange={vm.goTo} />

        {vm.step === 'buyer' && (
          <div key="buyer" className="mt-10 animate-slide-left">
            <div className="grid max-w-[750px] gap-x-[80px] gap-y-[22px] sm:grid-cols-2">
              <TextField control={vm.control} name="lastName" label="Фамилия" rules={vm.rules.lastName} autoComplete="family-name" />
              <TextField control={vm.control} name="firstName" label="Имя" rules={vm.rules.firstName} autoComplete="given-name" />
              <TextField
                control={vm.control}
                name="phone"
                label="Телефон"
                type="tel"
                placeholder="+7"
                mask={vm.maskPhone}
                rules={vm.rules.phone}
              />
              <TextField control={vm.control} name="email" label="Электронная почта" type="email" rules={vm.rules.email} />
            </div>
            <Button variant="dark" size="lg" className="mt-8" onClick={vm.next}>
              Далее
            </Button>
          </div>
        )}

        {vm.step === 'delivery' && (
          <div key="delivery" className="mt-8 animate-slide-left">
            <p className="text-[16px] font-medium">Выберите подходящий вам вариант доставки:</p>
            <RadioGroupField control={vm.control} name="delivery" options={[...DELIVERY_OPTIONS]} className="mt-5" />

            {vm.delivery === 'courier' ? (
              <div className="mt-8 animate-fade-in">
                <h3 className="font-display text-[16px]">Введите адрес доставки</h3>
                <div className="mt-6 grid max-w-[660px] gap-x-12 gap-y-[22px] sm:grid-cols-[1fr_1fr]">
                  <TextField control={vm.control} name="city" label="Город" rules={vm.rules.city} />
                  <TextField control={vm.control} name="building" label="Корпус" />
                  <TextField control={vm.control} name="street" label="Улица" rules={vm.rules.street} />
                  <div className="grid grid-cols-2 gap-x-6">
                    <TextField control={vm.control} name="house" label="Дом" rules={vm.rules.house} />
                    <TextField control={vm.control} name="flat" label="Квартира" rules={vm.rules.flat} />
                  </div>
                  <TextField
                    control={vm.control}
                    name="date"
                    label="Ближайшая дата доставки"
                    readOnly
                    suffix={
                      <button type="button" onClick={vm.shiftDate} className="text-[12px] text-muted transition-colors hover:text-brand">
                        Изменить
                      </button>
                    }
                  />
                  <div>
                    <span className="block font-display text-[12px] leading-[14px]">Сумма доставки</span>
                    <p
                      className={
                        vm.summary.deliveryCost === null
                          ? 'mt-1 flex h-9 items-center border-b border-muted/70 text-[16px] text-brand-light'
                          : 'mt-1 flex h-9 items-center border-b border-black text-[16px]'
                      }
                    >
                      {vm.summary.deliveryCost === null
                        ? 'заполните все поля для расчёта'
                        : `${vm.summary.deliveryCost.toLocaleString('ru-RU')} ₽`}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8 animate-fade-in">
                <h3 className="font-display text-[16px]">Выберите пункт доставки</h3>
                <Select
                  options={PICKUP_OPTIONS}
                  value={vm.pickupPoint || undefined}
                  onChange={vm.setPickupPoint}
                  placeholder="Выберите пункт"
                  className="mt-5 max-w-[380px]"
                />
                <ul className="mt-6 flex max-w-[400px] flex-col gap-4 text-[16px] leading-5">
                  <li>Доставка бесплатно до пункта выдачи</li>
                  <li>Дата доставки в пункт выдачи ориентировочно — 10 февраля.</li>
                  <li>Срок хранения заказа 14 дней</li>
                </ul>
              </div>
            )}

            <Button variant="dark" size="lg" className="mt-8" onClick={vm.next}>
              Далее
            </Button>
          </div>
        )}

        {vm.step === 'payment' && (
          <div key="payment" className="mt-8 animate-slide-left">
            <p className="text-[16px] font-medium">Выберите подходящий вам вариант оплаты:</p>
            <RadioGroupField control={vm.control} name="payment" options={[...PAYMENT_OPTIONS]} className="mt-5" />
            {vm.payment === 'receipt' && (
              <RadioGroupField
                control={vm.control}
                name="receiptMethod"
                options={[...RECEIPT_OPTIONS]}
                direction="column"
                className="mt-4 animate-fade-in pl-8"
              />
            )}
            <Button type="submit" variant="primary" size="lg" className="mt-9">
              Подтвердить заказ
            </Button>
            <div className="mt-3 max-w-[308px]">
              <ConsentNote />
            </div>
          </div>
        )}
      </form>

      <CheckoutSummary {...vm.summary} />
    </div>
  )
}
