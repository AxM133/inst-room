import { BrandTile } from '@/entities/brand'
import { useBrandsGrid } from '../model/useBrandsGrid'

export function BrandsGrid() {
  const vm = useBrandsGrid()

  return (
    <div className="mb-[80px] mt-8 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
      {vm.tiles.map(({ brand, key }, index) => (
        <div key={key} className="animate-fade-up" style={{ animationDelay: `${(index % 8) * 40}ms` }}>
          <BrandTile brand={brand} className="h-[158px]" imageClassName="max-h-[90px] max-w-[70%]" />
        </div>
      ))}
    </div>
  )
}
