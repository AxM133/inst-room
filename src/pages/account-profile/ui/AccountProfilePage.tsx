import { PasswordForm, PersonalDataForm } from '@/features/profile-edit'
import { AccountShell } from '@/widgets/account-shell'

export function AccountProfilePage() {
  return (
    <AccountShell>
      <PersonalDataForm />
      <PasswordForm />
    </AccountShell>
  )
}
