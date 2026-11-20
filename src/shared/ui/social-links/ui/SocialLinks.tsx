import { cn } from '../../../lib'
import { FacebookIcon, InstagramIcon, VkIcon } from '../../icons'
import { SOCIAL_LINKS, type SocialId } from '../model/links'

const ICONS: Record<SocialId, typeof VkIcon> = {
  instagram: InstagramIcon,
  vk: VkIcon,
  facebook: FacebookIcon,
}

interface SocialLinksProps {
  size?: number
  className?: string
}

export function SocialLinks({ size = 38, className }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICONS[link.id]
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              style={{ width: size, height: size }}
              className="grid place-items-center rounded-full bg-white text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-white"
            >
              <Icon size={size * 0.6} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
