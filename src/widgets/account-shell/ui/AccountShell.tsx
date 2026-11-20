import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Breadcrumbs, Button, Container, PageTitle, PromoBanners } from '@/shared/ui'
import { useAccountShell } from '../model/useAccountShell'

export function AccountShell({ children }: { children: ReactNode }) {
  const vm = useAccountShell()

  return (
    <Container className="pb-[80px]">
      <Breadcrumbs items={[{ label: 'Главная', to: ROUTES.home }, { label: 'Личный кабинет' }]} />
      <PageTitle className="mt-[18px]">Личный кабинет</PageTitle>

      {!vm.isAuth ? (
        <div className="mt-8 animate-fade-up bg-white px-6 py-16 text-center">
          <p className="font-display text-[24px]">Войдите, чтобы увидеть личный кабинет</p>
          <p className="mt-3 text-muted">Мы отправим код подтверждения на ваш телефон</p>
          <Button className="mt-6" onClick={vm.login}>
            Войти
          </Button>
        </div>
      ) : (
        <div className="mt-[30px] grid items-start gap-8 lg:grid-cols-[310px_1fr] lg:gap-[30px]">
          <aside className="flex flex-col gap-5">
            <nav className="bg-ink" aria-label="Личный кабинет">
              {vm.nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    'block border-b border-graphite px-6 py-[26px] font-display text-[16px] leading-5 transition-colors duration-300 last:border-0 hover:text-brand',
                    vm.pathname === item.to ? 'text-brand' : 'text-white',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button type="button" onClick={vm.logout} className="text-left text-[14px] text-muted transition-colors hover:text-brand">
              Выйти из кабинета
            </button>
            <PromoBanners className="hidden lg:flex" />
          </aside>
          <div className="min-w-0">{children}</div>
        </div>
      )}
    </Container>
  )
}
