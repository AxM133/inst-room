import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import type { ArticleBlock } from '@/entities/news'
import { Breadcrumbs, ButtonLink, Container, PageTitle, Reveal } from '@/shared/ui'
import { useArticle } from '../model/useArticle'

const Paragraphs = ({ items, className }: { items: string[]; className?: string }) => (
  <div className={className}>
    {items.map((text) => (
      <p key={text.slice(0, 40)} className="mb-4 text-[14px] leading-5 last:mb-0">
        {text}
      </p>
    ))}
  </div>
)

const Block = ({ block }: { block: ArticleBlock }) => {
  switch (block.type) {
    case 'text':
      return (
        <Container className="py-12">
          <Paragraphs items={block.paragraphs} />
        </Container>
      )
    case 'quote-grid':
      return (
        <Container className="grid lg:grid-cols-[640px_1fr]">
          <div className="flex min-h-[420px] items-center bg-brand p-10 text-white lg:p-[36px] lg:pr-[60px]">
            <Paragraphs items={block.quote} className="max-w-[360px] text-white [&_p]:text-[12px] [&_p]:leading-[17px]" />
          </div>
          <div className="flex items-center bg-white p-10 lg:px-[36px]">
            <Paragraphs items={block.textTop} className="max-w-[420px] [&_p]:text-[12px] [&_p]:leading-[17px]" />
          </div>
          <div className="flex items-center p-6 lg:pl-0 lg:pr-[60px]">
            <Paragraphs items={block.textBottom} className="max-w-[420px] [&_p]:text-[12px] [&_p]:leading-[17px]" />
          </div>
          <img src={block.image} alt="" loading="lazy" className="h-full max-h-[340px] w-full object-cover" />
        </Container>
      )
    case 'list':
      return (
        <section className="bg-white py-[50px]">
          <Container className="max-w-[900px]">
            <h3 className="max-w-[400px] font-display text-[16px] leading-5">{block.title}</h3>
            <ul className="mt-4 space-y-3 text-[12px] leading-4 text-graphite">
              {block.items.map((item, i) => (
                <li key={i} className="max-w-[640px]">
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )
    case 'table':
      return (
        <Container className="py-12">
          <h3 className="max-w-[640px] font-display text-[16px] leading-5">{block.title}</h3>
          <Paragraphs items={block.paragraphs} className="mt-4 max-w-[640px]" />
          <div className="mt-10 overflow-x-auto bg-white">
            <table className="w-full min-w-[720px] text-[10px] leading-3">
              <thead>
                <tr>
                  {block.head.map((h, i) => (
                    <th key={h} className={i === 0 ? 'px-6 py-4 text-left font-display text-[12px] font-normal' : 'px-3 py-4 font-normal'}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row[0]} className="border-t border-surface">
                    {row.map((cell, i) => (
                      <td key={i} className={i === 0 ? 'px-6 py-4 font-display text-[12px]' : 'px-3 py-4 text-center'}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      )
    case 'banner':
      return (
        <div className="grid lg:grid-cols-[1fr_1fr]">
          <img src={block.image} alt="" loading="lazy" className="h-full max-h-[400px] w-full object-cover" />
          <div className="flex items-center bg-brand p-10 text-white lg:p-[60px]">
            <Paragraphs items={block.quote} className="max-w-[400px] [&_p]:text-[12px] [&_p]:leading-[17px]" />
          </div>
        </div>
      )
  }
}

export function Article() {
  const vm = useArticle()

  if (!vm.article) {
    return (
      <Container className="py-20 text-center">
        <p className="font-display text-[24px]">Новость не найдена</p>
        <ButtonLink to={ROUTES.news} className="mt-6">
          Ко всем новостям
        </ButtonLink>
      </Container>
    )
  }

  return (
    <article>
      <Container className="pb-8">
        <Breadcrumbs items={vm.crumbs} />
        <PageTitle className="mt-4 max-w-[860px]">{vm.article.title}</PageTitle>
      </Container>
      <img
        src={vm.article.heroImage}
        alt=""
        className="h-[260px] w-full animate-fade-in object-cover sm:h-[481px]"
      />
      {vm.article.blocks.map((block, index) => (
        <Reveal key={index}>
          <Block block={block} />
        </Reveal>
      ))}
      <Container className="pb-[60px] pt-8">
        <Link to={ROUTES.news} className="text-brand transition-colors hover:text-black">
          ← Ко всем новостям
        </Link>
      </Container>
    </article>
  )
}
