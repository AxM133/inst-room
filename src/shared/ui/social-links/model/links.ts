export const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  { id: 'vk', label: 'ВКонтакте', href: 'https://vk.com' },
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
] as const

export type SocialId = (typeof SOCIAL_LINKS)[number]['id']
