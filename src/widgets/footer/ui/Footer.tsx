import { Link } from 'react-router'
import { ROUTES, SITE } from '@/shared/config'
import { Container, Logo, SocialLinks } from '@/shared/ui'
import { FOOTER_CATEGORY_LINKS, FOOTER_COMPANY_LINKS } from '../model/links'

const linkClass = 'block py-[8px] text-[16px] leading-5 text-white transition-colors duration-200 hover:text-brand'

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-10 py-[60px] md:grid-cols-3 lg:pl-[126px]">
        <ul>
          {FOOTER_CATEGORY_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {FOOTER_COMPANY_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Logo className="-mt-1" />
          <div className="mt-8 flex flex-col gap-1.5 font-display text-[16px] leading-[22px]">
            {SITE.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s|-/g, '')}`} className="transition-colors hover:text-brand">
                {phone}
              </a>
            ))}
          </div>
          <SocialLinks size={32} className="mt-5 gap-6" />
          <div className="mt-8 text-[14px] leading-6">
            <Link to={ROUTES.privacy} className="block transition-colors hover:text-brand">
              Соглашение пользователя
            </Link>
            <span className="block">{SITE.copyright}</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
