import { Button, CheckCircleIcon, RadioGroupField, Select, ShowMoreButton, Tabs } from '@/shared/ui'
import { ReviewCard } from '@/entities/review'
import { CITIES, PICKUP_POINTS, useProductTabs } from '../model/useProductTabs'

const METHODS = [
  { value: 'courier', label: 'Доставка курьером' },
  { value: 'pickup', label: 'Самовывоз' },
] as const

const CITY_OPTIONS = CITIES.map((c) => ({ value: c, label: c }))
const POINT_OPTIONS = PICKUP_POINTS.map((c) => ({ value: c, label: c }))

const COURIER_TERMS = [
  'В заказе только мелкие товары — 500 ₽;',
  'В заказе есть крупные товары — 1 500 ₽;',
  'В заказе есть габаритный товар — 3 000 ₽;',
  'Общая стоимость товаров менее 2000 — + 100 ₽.',
]

export function ProductTabs() {
  const vm = useProductTabs()
  if (!vm.product) return null

  return (
    <section className="border-t border-surface px-6 pb-10 pt-8 lg:px-[46px]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <Tabs items={vm.tabs} value={vm.tab} onChange={vm.setTab} />
        {vm.tab === 'delivery' && (
          <ul className="animate-fade-in space-y-1 text-[12px] text-success">
            {METHODS.map((m) => (
              <li key={m.value} className="flex items-center gap-2">
                <CheckCircleIcon size={16} />
                {m.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div key={vm.tab} className="mt-9 animate-fade-in">
        {vm.tab === 'description' && (
          <div className="max-w-[980px] text-[14px] leading-5">
            <p>
              {vm.product.name} — высококачественный товар для дома и дачи. Изготовлен на оборудовании «NETZSCH» по специальным
              рецептурам, разработанным компанией «ABC FARBEN». Предназначен для защиты, повышения срока службы и придания
              декоративного вида.
            </p>
            <h3 className="mt-3 font-display text-[12px]">Подзаголовок:</h3>
            <ul className="mt-2 space-y-2.5">
              <li>— Заполненное и подписанное заявление о государственной регистрации прекращения деятельности физических лиц в качестве ИП — форма № Р26001;</li>
              <li>— Документ об уплате госпошлины в размере 160 ₽;</li>
              <li>— Документ, подтверждающий предоставление информации в территориальный орган ПФР;</li>
            </ul>
          </div>
        )}

        {vm.tab === 'specs' && (
          <dl className="grid gap-x-16 gap-y-2.5 text-[14px] sm:grid-cols-2 lg:grid-cols-3">
            {vm.product.specs.map(([label, value]) => (
              <div key={label} className="flex gap-3">
                <dt className="font-display text-[12px] leading-5">{label}:</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {vm.tab === 'delivery' && (
          <div className="max-w-[780px] text-[14px] leading-4">
            <p>
              Мы доставим вашу покупку в любую точку Российской Федерации. Чтобы узнать подробности доставки, выберите один из
              пунктов. Приведённый ниже расчёт стоимости доставки носит информационный характер. Точную информацию о стоимости
              товара или заказа в целом можно увидеть при оформлении заказа.
            </p>
            <RadioGroupField control={vm.delivery.control} name="method" options={[...METHODS]} className="mt-5 [&_label]:text-[12px]" />

            {vm.delivery.method === 'courier' ? (
              <div className="mt-5 animate-fade-in">
                <h4 className="font-display text-[12px]">Выберите населённый пункт</h4>
                <Select options={CITY_OPTIONS} value={vm.delivery.city || undefined} onChange={vm.delivery.setCity} placeholder="Москва" className="mt-3 max-w-[200px]" />
                <p className="mt-5 text-[12px]">Курьером до клиента</p>
                <ul className="mt-2.5 space-y-2 text-[12px]">
                  {COURIER_TERMS.map((t) => (
                    <li key={t}>— {t}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="mt-5 animate-fade-in">
                <h4 className="font-display text-[12px]">Выберите пункт доставки</h4>
                <Select options={POINT_OPTIONS} value={vm.delivery.point || undefined} onChange={vm.delivery.setPoint} placeholder="Москва, ул Первомайская 14" className="mt-3 max-w-[260px]" />
                <p className="mt-5 text-[12px]">Доставка бесплатно до пункта выдачи</p>
                <p className="mt-3 text-[12px]">Ближайшая дата доставки — 10 февраля. Срок хранения заказа 14 дней</p>
              </div>
            )}
          </div>
        )}

        {vm.tab === 'reviews' && (
          <div>
            <div className="grid gap-4 md:grid-cols-2">
              {vm.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            {vm.hasManyReviews && vm.canShowMoreReviews && <ShowMoreButton onClick={vm.showMoreReviews} className="mt-4" />}
            <div className="mt-6 text-center">
              <Button onClick={vm.openReviewForm} className="h-[36px] px-6 text-[12px]">
                Оставить отзыв
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
