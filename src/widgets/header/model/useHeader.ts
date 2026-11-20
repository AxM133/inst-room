import { useLocation, useNavigate } from 'react-router'
import { ROUTES } from '@/shared/config'
import { openModal } from '@/shared/lib'
import { useCart } from '@/entities/cart'
import { useCompare } from '@/entities/compare'
import { useFavorites } from '@/entities/favorites'
import { useUser } from '@/entities/user'

export function useHeader() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { count: favoritesCount } = useFavorites()
  const { count: compareCount } = useCompare()
  const { totals, lines } = useCart()
  const { isAuth } = useUser()

  return {
    favoritesCount,
    compareCount,
    cartCount: lines.length,
    cartTotal: totals.total,
    active: {
      favorites: pathname.startsWith(ROUTES.favorites),
      compare: pathname.startsWith(ROUTES.compare),
      account: pathname.startsWith(ROUTES.account),
      cart: pathname.startsWith(ROUTES.cart) || pathname.startsWith(ROUTES.checkout),
    },
    onUserClick: () => (isAuth ? navigate(ROUTES.accountOrders) : openModal({ kind: 'login' })),
    onCallback: () => openModal({ kind: 'callback' }),
  }
}
