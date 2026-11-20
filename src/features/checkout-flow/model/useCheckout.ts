import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { ROUTES } from '@/shared/config'
import { isFullPhone, maskPhone, openModal } from '@/shared/lib'
import { clearCart, useCart } from '@/entities/cart'
import { addOrder } from '@/entities/order'
import { useUser } from '@/entities/user'

export type CheckoutStep = 'buyer' | 'delivery' | 'payment'
export type DeliveryMethod = 'courier' | 'pickup'
export type PaymentMethod = 'receipt' | 'online'
export type ReceiptMethod = 'cash' | 'card'

export interface CheckoutValues {
  lastName: string
  firstName: string
  phone: string
  email: string
  delivery: DeliveryMethod
  city: string
  street: string
  building: string
  house: string
  flat: string
  date: string
  pickupPoint: string
  payment: PaymentMethod
  receiptMethod: ReceiptMethod
}

export const STEPS: CheckoutStep[] = ['buyer', 'delivery', 'payment']

export const STEP_FIELDS: Record<CheckoutStep, Array<keyof CheckoutValues>> = {
  buyer: ['lastName', 'firstName', 'phone', 'email'],
  delivery: ['city', 'street', 'house', 'flat', 'pickupPoint'],
  payment: [],
}

export const PICKUP_POINTS = [
  'Москва, ул Первомайская 14',
  'Москва, ул Маяковского 120',
  'Санкт-Петербург, ул Маршака 2',
  'Можайск, ул 1-я Дубравная 15',
]

const COURIER_PRICE = 1500

const formatDate = (d: Date) => d.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })

const addDays = (value: string, days: number): string => {
  const [d, m, y] = value.split('.').map(Number)
  const date = new Date(y, m - 1, d)
  date.setDate(date.getDate() + days)
  return formatDate(date)
}

export function useCheckout() {
  const navigate = useNavigate()
  const { profile } = useUser()
  const cart = useCart()
  const [step, setStep] = useState<CheckoutStep>('buyer')
  const [reached, setReached] = useState(0)

  const form = useForm<CheckoutValues>({
    mode: 'onTouched',
    defaultValues: {
      lastName: profile.lastName,
      firstName: profile.firstName,
      phone: profile.phone,
      email: profile.email,
      delivery: 'courier',
      city: profile.city,
      street: profile.street,
      building: profile.building,
      house: profile.house,
      flat: profile.flat,
      date: addDays(formatDate(new Date()), 3),
      pickupPoint: '',
      payment: 'receipt',
      receiptMethod: 'card',
    },
  })

  const delivery = form.watch('delivery')
  const [city, street, house, flat, date, pickupPoint, payment] = form.watch([
    'city',
    'street',
    'house',
    'flat',
    'date',
    'pickupPoint',
    'payment',
  ])

  const addressComplete = Boolean(city && street && house && flat)
  const deliveryCost: number | null = step === 'buyer' ? 0 : delivery === 'pickup' ? 0 : addressComplete ? COURIER_PRICE : null

  const summary = useMemo(
    () => ({
      quantity: cart.totals.quantity,
      subtotal: cart.totals.subtotal,
      discount: cart.totals.discount,
      deliveryCost,
      total: cart.totals.total + (deliveryCost ?? 0),
    }),
    [cart.totals, deliveryCost],
  )

  const goTo = (target: CheckoutStep) => {
    const index = STEPS.indexOf(target)
    if (index <= reached) setStep(target)
  }

  const next = async () => {
    const valid = await form.trigger(STEP_FIELDS[step])
    if (!valid) return
    const index = STEPS.indexOf(step)
    setReached((r) => Math.max(r, index + 1))
    setStep(STEPS[index + 1])
  }

  const submit = form.handleSubmit(() => {
    addOrder(cart.items)
    clearCart()
    navigate(ROUTES.accountOrders)
    openModal({
      kind: 'thanks',
      title: 'Спасибо за заказ!',
      text: 'Ваш заказ принят. Мы свяжемся с вами для подтверждения в ближайшее время',
      cta: 'На главную',
    })
  })

  const required = { required: 'Обязательное поле' }

  return {
    form,
    control: form.control,
    step,
    reached,
    goTo,
    next,
    submit,
    summary,
    isEmpty: cart.lines.length === 0,
    delivery,
    payment,
    pickupPoint,
    date,
    shiftDate: () => form.setValue('date', addDays(date, 1)),
    setPickupPoint: (value: string) => form.setValue('pickupPoint', value, { shouldValidate: true }),
    maskPhone,
    rules: {
      lastName: required,
      firstName: required,
      phone: { validate: (v: string) => isFullPhone(v) || 'Введите номер телефона полностью' },
      email: { ...required, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Введите корректный email' } },
      city: delivery === 'courier' ? required : {},
      street: delivery === 'courier' ? required : {},
      house: delivery === 'courier' ? required : {},
      flat: delivery === 'courier' ? required : {},
      pickupPoint: delivery === 'pickup' ? required : {},
    },
  }
}
