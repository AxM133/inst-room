import { AccountShell } from '@/widgets/account-shell'
import { OrdersList } from '@/widgets/orders-list'

export function AccountOrdersPage() {
  return (
    <AccountShell>
      <OrdersList />
    </AccountShell>
  )
}
