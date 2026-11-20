import { useLocation, useNavigate } from 'react-router'
import { ROUTES } from '@/shared/config'
import { openModal } from '@/shared/lib'
import { signOut, useUser } from '@/entities/user'

export const ACCOUNT_NAV = [
  { label: 'История заказов', to: ROUTES.accountOrders },
  { label: 'Личная информация', to: ROUTES.accountProfile },
]

export function useAccountShell() {
  const { isAuth } = useUser()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return {
    isAuth,
    pathname,
    nav: ACCOUNT_NAV,
    login: () => openModal({ kind: 'login' }),
    logout: () => {
      signOut()
      navigate(ROUTES.home)
    },
  }
}
