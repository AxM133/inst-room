import { Breadcrumbs, Container, PageTitle, Reveal } from '@/shared/ui'
import { ROUTES } from '@/shared/config'
import { BODY, DOCS, IMAGES, LEAD, POINTS, SPLIT } from '../model/content'

export function TextContent({ title }: { title: string }) {
  return (
    <div>
      <Container>
        <Breadcrumbs items={[{ label: 'Главная', to: ROUTES.home }, { label: title }]} />
        <PageTitle className="mt-[18px] text-[28px] sm:text-[30px]">{title}</PageTitle>

        <div className="mt-9 max-w-[1300px] space-y-[16px] text-[14px] leading-5">
          <p className="animate-fade-in">{LEAD}</p>
          {POINTS.map((point, i) => (
            <p key={i} className="animate-fade-in">
              {point}
            </p>
          ))}
        </div>

        <h2 className="mt-9 font-display text-[16px]">Онлайн — гипермаркет проанализировал спрос:</h2>
        <ul className="mt-4 max-w-[600px] space-y-4 pb-[40px] text-[12px] leading-4 text-graphite">
          {DOCS.map((doc, i) => (
            <li key={i}>{doc}</li>
          ))}
        </ul>
      </Container>

      <Reveal>
        <img src={IMAGES.wide} alt="" loading="lazy" className="h-[200px] w-full object-cover sm:h-[300px] lg:h-[480px]" />
      </Reveal>

      <Container className="max-w-[1332px]">
        <Reveal className="py-9">
          <div className="max-w-[1100px] space-y-4 text-[12px] leading-[17px]">
            {BODY.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
        <Reveal className="max-w-[330px] space-y-4 text-[12px] leading-[17px]">
          {SPLIT.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </Reveal>
        <Reveal direction="left" className="lg:-mr-[calc((100vw-1300px)/2)]">
          <img src={IMAGES.split} alt="" loading="lazy" className="h-[300px] w-full object-cover" />
        </Reveal>
      </Container>

      <Container className="pb-[60px] pt-9">
        <Reveal>
          <div className="max-w-[1100px] space-y-4 text-[12px] leading-[17px]">
            {BODY.map((p) => (
              <p key={`b-${p.slice(0, 30)}`}>{p}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
