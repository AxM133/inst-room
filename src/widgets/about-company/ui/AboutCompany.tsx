import { ROUTES } from '@/shared/config'
import { ButtonLink, Container, Reveal, SectionTitle } from '@/shared/ui'
import { ABOUT } from '../model/content'

export function AboutCompany() {
  return (
    <Container className="grid items-center gap-8 py-[60px] lg:grid-cols-[640px_1fr] lg:gap-[130px]">
      <Reveal direction="left">
        <div className="aspect-[640/480] overflow-hidden rounded-[3px]">
          <img src={ABOUT.image} alt="" loading="lazy" className="size-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
      </Reveal>
      <Reveal delay={150} className="max-w-[420px]">
        <SectionTitle className="text-[20px] sm:text-[20px]">{ABOUT.title}</SectionTitle>
        <div className="mt-[18px] flex flex-col gap-4 text-[14px] leading-5">
          {ABOUT.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <ButtonLink to={ROUTES.catalog} variant="dark" className="mt-9 h-[46px] px-8 text-[12px]">
          Перейти в каталог
        </ButtonLink>
      </Reveal>
    </Container>
  )
}
