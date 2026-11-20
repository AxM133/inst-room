import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router'
import { ROUTES, SITE } from '@/shared/config'
import { cn, formatPrice } from '@/shared/lib'
import { CartIcon, CompareIcon, Container, HeartIcon, Logo, SocialLinks, UserIcon } from '@/shared/ui'
import { HeaderSearch } from '@/features/search'
import { MAIN_NAV, useHeader } from '../model'
import { CatalogMenu } from './CatalogMenu'
import { ACTION_BOX, HeaderActionBox } from './HeaderActionBox'

const LinkBox = ({
  to,
  label,
  count,
  active,
  children,
}: {
  to: string
  label: string
  count: number
  active: boolean
  children: ReactNode
}) => (
  <Link to={to} aria-label={label} title={label} className={cn(ACTION_BOX, active ? 'bg-brand' : 'bg-graphite hover:bg-brand/90')}>
    {children}
    <span
      key={count}
      className={cn(
        'absolute right-1.5 top-1.5 grid size-5 sm:right-[26px] sm:top-[24px] animate-pop place-items-center rounded-full text-[10px] font-medium text-white',
        active ? 'bg-graphite' : 'bg-brand',
      )}
    >
      {count}
    </span>
  </Link>
)

export function Header() {
  const vm = useHeader()

  return (
    <header className="relative z-40">
      <div className="bg-ink">
        <Container className="flex h-14 items-center gap-3 sm:h-24 sm:gap-6 lg:gap-0">
          <div className="w-[96px] shrink-0 sm:w-[120px] lg:w-[220px]">
            <Logo />
          </div>
          <p className="hidden w-[330px] text-[16px] text-white xl:block">
            Время работы: <span className="ml-1">{SITE.workTime}</span>
          </p>
          <div className="hidden flex-1 md:block">
            <a href={`tel:${SITE.phones[0].replace(/\s|-/g, '')}`} className="block font-display text-[16px] leading-5 text-white transition-colors hover:text-brand">
              {SITE.phones[0]}
            </a>
            <button
              type="button"
              onClick={vm.onCallback}
              className="mt-1 text-[12px] leading-4 text-brand-light underline underline-offset-2 transition-colors hover:text-brand"
            >
              Заказать звонок
            </button>
          </div>

          <div className="ml-auto flex items-center">
            <LinkBox to={ROUTES.favorites} label="Избранное" count={vm.favoritesCount} active={vm.active.favorites}>
              <HeartIcon size={32} />
            </LinkBox>
            <LinkBox to={ROUTES.compare} label="Сравнение" count={vm.compareCount} active={vm.active.compare}>
              <CompareIcon size={32} />
            </LinkBox>
            <HeaderActionBox label="Личный кабинет" active={vm.active.account} onClick={vm.onUserClick}>
              <UserIcon size={32} />
            </HeaderActionBox>
            <LinkBox to={ROUTES.cart} label="Корзина" count={vm.cartCount} active={vm.active.cart}>
              <CartIcon size={32} />
            </LinkBox>
            <div className="ml-4 hidden w-[140px] text-white lg:block">
              <div className="text-[16px] leading-6">Товаров на сумму</div>
              <div className="font-display text-[14px] font-bold leading-5">{formatPrice(vm.cartTotal)}</div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-black">
        <Container className="flex min-h-[88px] flex-wrap items-center gap-x-10 gap-y-3 py-4">
          <CatalogMenu />
          <nav className="hidden items-center gap-[52px] md:flex" aria-label="Основная навигация">
            {MAIN_NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn('text-[16px] text-white transition-colors hover:text-brand', isActive && 'text-brand')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <SocialLinks size={38} className="hidden gap-2.5 xl:flex" />
          <HeaderSearch className="ml-auto" />
        </Container>
      </div>
    </header>
  )
}
