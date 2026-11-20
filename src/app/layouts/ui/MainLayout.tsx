import { Outlet } from 'react-router'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { ModalsHost } from '@/widgets/modals-host'
import { useMainLayout } from '../model/useMainLayout'

export function MainLayout() {
  const { pathname } = useMainLayout()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main key={pathname} className="flex-1 animate-fade-in">
        <Outlet />
      </main>
      <Footer />
      <ModalsHost />
    </div>
  )
}
