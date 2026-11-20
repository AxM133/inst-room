import { AccountShell } from '@/widgets/account-shell'
import { OrdersList } from './OrdersList'

export function AccountOrdersPage() {
  return (
    <AccountShell>
      <OrdersList />
    </AccountShell>
  )
}
