import { Link } from 'react-router'
import { cn } from '@/shared/lib'
import { ArrowIcon, Container } from '@/shared/ui'
import { HERO_BANNERS } from '../model/banners'

export function HeroBanners() {
  return (
    <section className="bg-ink py-5" aria-label="Главные предложения">
      <Container>
        <div className="grid gap-5 lg:h-[488px] lg:grid-cols-[640fr_311fr_310fr] lg:grid-rows-2">
          {HERO_BANNERS.map((banner, index) => (
            <Link
              key={banner.id}
              to={banner.to}
              style={{ animationDelay: `${index * 90}ms` }}
              className={cn(
                'group relative block animate-fade-up overflow-hidden rounded-[3px] bg-graphite',
                banner.className,
              )}
            >
              <img
                src={banner.image}
                alt=""
                className="absolute inset-0 size-full object-cover transition-[filter] duration-500 group-hover:brightness-110"
              />
              <h2 className="sr-only">{banner.title}</h2>
              {banner.cta && (
                <span className="absolute left-[25px] top-[270px] hidden h-[46px] w-[210px] place-items-center rounded-[3px] bg-brand text-[12px] font-medium uppercase text-white transition-colors duration-300 group-hover:bg-black lg:grid">
                  {banner.cta}
                </span>
              )}
              <span className="absolute bottom-0 left-0 grid size-[58px] place-items-center bg-black text-white transition-colors duration-300 group-hover:bg-brand">
                <ArrowIcon size={24} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
