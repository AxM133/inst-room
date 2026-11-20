import { Reveal } from '@/shared/ui'
import { useRelatedProducts } from '../model/useRelatedProducts'
import { ProductRail } from './ProductRail'

export function RelatedProducts() {
  const { similar, together } = useRelatedProducts()

  return (
    <div className="pb-[60px]">
      <Reveal>
        <ProductRail title="Похожие товары" products={similar} />
      </Reveal>
      <Reveal>
        <ProductRail title="С этим товаром покупают" products={together} />
      </Reveal>
    </div>
  )
}
