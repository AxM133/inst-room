import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { formatPrice } from '@/shared/lib'
import { ButtonLink } from '@/shared/ui'
import { getCategory } from '@/entities/category'
import { QuantityStepper, RemoveFromCartButton } from '@/features/cart-add'
import { useCartContent } from '../model/useCartContent'

const GRID = 'lg:grid lg:grid-cols-[530fr_250fr_320fr_160fr_40fr] lg:items-center'

export function CartContent() {
  const vm = useCartContent()

  if (vm.isEmpty) {
    return (
      <div className="mt-8 animate-fade-up bg-white px-6 py-16 text-center">
        <p className="font-display text-[24px]">Корзина пуста</p>
        <p className="mt-3 text-muted">Добавьте товары из каталога</p>
        <ButtonLink to={ROUTES.catalog} className="mt-6">
          Перейти в каталог
        </ButtonLink>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className={`mt-[30px] hidden px-0 pb-[18px] lg:grid pl-0 font-display text-[16px] ${GRID}`}>
        <span>Название</span>
        <span>Стоимость</span>
        <span>Количество</span>
        <span>Итого</span>
        <span />
      </div>

      <ul>
        {vm.lines.map(({ product, qty, total }, index) => (
          <li
            key={product.id}
            style={{ animationDelay: `${index * 50}ms` }}
            className={`group relative flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-3 border-b border-surface bg-white p-4 transition-shadow duration-300 hover:z-10 hover:shadow-card lg:h-[90px] lg:p-0 ${GRID}`}
          >
            <div className="flex items-center gap-6 lg:pl-[40px]">
              <Link to={ROUTES.product(product.id)} className="grid size-[64px] shrink-0 place-items-center">
                <img src={product.image} alt="" className="max-h-full max-w-full object-contain" />
              </Link>
              <div className="lg:pl-[66px]">
                <Link
                  to={ROUTES.category(product.topSlug)}
                  className="block text-[14px] leading-4 text-muted transition-colors hover:text-brand"
                >
                  {getCategory(product.topSlug)?.title}
                </Link>
                <Link to={ROUTES.product(product.id)} className="mt-1.5 block text-[16px] leading-5 transition-colors hover:text-brand">
                  {product.name}
                </Link>
              </div>
            </div>
            <div className="relative text-[16px] lg:pl-5">
              {formatPrice(product.price)}
              {product.oldPrice && (
                <span className="absolute -top-2.5 ml-1 text-[10px] text-line line-through">{formatPrice(product.oldPrice)}</span>
              )}
            </div>
            <div>
              <QuantityStepper productId={product.id} qty={qty} />
            </div>
            <div className="text-[16px]">{formatPrice(total)}</div>
            <div className="ml-auto lg:ml-0">
              <RemoveFromCartButton productId={product.id} />
            </div>
          </li>
        ))}
      </ul>

      <div className="ml-auto mt-4 w-full max-w-[310px] pb-[60px]">
        <div className="flex items-center justify-between border-b border-line py-[18px] text-[16px]">
          <span>Сумма</span>
          <span>{formatPrice(vm.totals.subtotal)}</span>
        </div>
        <div className="flex items-center justify-between border-b border-line py-[18px] text-[16px] text-muted">
          <span>Скидка</span>
          <span>— {formatPrice(vm.totals.discount)}</span>
        </div>
        <div className="flex items-center justify-between py-[18px] font-display text-[20px]">
          <span>К оплате</span>
          <span key={vm.totals.total} className="animate-fade-in text-brand">
            {formatPrice(vm.totals.total)}
          </span>
        </div>
        <ButtonLink to={ROUTES.checkout} className="h-[50px] w-[280px] max-w-full px-4">
          Перейти к оформлению
        </ButtonLink>
      </div>
    </div>
  )
}
