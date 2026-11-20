import { SectionTitle } from '@/shared/ui'
import { useBrandInfo } from '../model/useBrandInfo'

export function BrandInfo() {
  const { brand } = useBrandInfo()
  if (!brand) return null

  return (
    <>
      <div className="mt-7 flex animate-fade-up flex-col gap-8 sm:flex-row">
        <div className="grid h-[148px] w-[200px] shrink-0 place-items-center bg-white">
          <img src={brand.logo} alt={brand.name} className="max-h-[80px] max-w-[160px] object-contain mix-blend-multiply" />
        </div>
        <p className="max-w-[780px] text-[14px] leading-[18px]">{brand.description}</p>
      </div>
      <SectionTitle className="mt-[50px] text-[24px] sm:text-[24px]">Товары {brand.name} в нашем магазине</SectionTitle>
    </>
  )
}
