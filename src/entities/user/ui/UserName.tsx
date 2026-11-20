import type { Profile } from '../model/store'

export function UserName({ profile }: { profile: Profile }) {
  return <span>{[profile.firstName, profile.lastName].filter(Boolean).join(' ') || 'Гость'}</span>
}
