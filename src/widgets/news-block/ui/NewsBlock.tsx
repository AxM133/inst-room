import { ButtonLink, Container, Reveal, SectionTitle } from '@/shared/ui'
import { NewsCard } from '@/entities/news'
import { useNewsBlock } from '../model/useNewsBlock'

export function NewsBlock({ withDescription = true }: { withDescription?: boolean }) {
  const vm = useNewsBlock()

  return (
    <Container className="grid gap-8 py-[60px] lg:grid-cols-[440px_1fr]">
      <Reveal className="max-w-[320px]">
        <SectionTitle className="text-[24px] sm:text-[30px]">Новости</SectionTitle>
        {withDescription && (
          <p className="mt-6 text-[14px] leading-5">
            Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей, форма организации
            предприятия, при которой его правосубъектность отличается от правосубъектности лиц, в нем участвующих.
            Компании имеют статус юридического лица.
          </p>
        )}
        <ButtonLink to={vm.allLink} className="mt-8 h-[46px] px-8 text-[12px]">
          Перейти к новостям
        </ButtonLink>
      </Reveal>
      <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2">
        {vm.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 100}>
            <NewsCard item={item} />
          </Reveal>
        ))}
      </div>
    </Container>
  )
}
