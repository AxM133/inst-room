import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'
import { Accordion, Checkbox, Radio } from '@/shared/ui'
import type { Product } from '@/entities/product'
import { useFilterPanel } from '../model/useFilterPanel'
import { PriceRange } from './PriceRange'

interface FilterPanelProps {
  pool: Product[]
  lockedBrandId?: string
  className?: string
}

const Group = ({ title, children, defaultOpen }: { title: string; children: ReactNode; defaultOpen?: boolean }) => (
  <Accordion
    title={title}
    defaultOpen={defaultOpen}
    iconSize={20}
    headerClassName="h-[50px] px-5 font-display text-[14px] text-white transition-colors hover:text-brand"
    className="border-b border-graphite last:border-0"
  >
    {children}
  </Accordion>
)

const DELIVERY = [
  { value: 'pickup', label: 'Самовывоз' },
  { value: 'courier', label: 'Доставка курьером' },
  { value: 'any', label: 'Любой' },
] as const

export function FilterPanel({ pool, lockedBrandId, className }: FilterPanelProps) {
  const vm = useFilterPanel(pool, lockedBrandId)

  return (
    <div className={cn('bg-ink text-white', className)}>
      <Group title="Цена, ₽" defaultOpen>
        <PriceRange
          bounds={{ min: vm.facets.min, max: vm.facets.max }}
          value={vm.price}
          onMin={vm.setPriceMin}
          onMax={vm.setPriceMax}
        />
      </Group>

      <Group title="Бренд" defaultOpen>
        <ul className="mx-5 mb-5 flex max-h-[170px] flex-col gap-3 overflow-y-auto pr-3 scrollbar-thin-brand">
          {vm.facets.brands.map((brand) => (
            <li key={brand.id}>
              <Checkbox
                checked={vm.isBrandChecked(brand.id)}
                onChange={(on) => vm.toggleBrand(brand.id, on)}
                label={brand.label}
                count={brand.count}
              />
            </li>
          ))}
        </ul>
      </Group>

      <Group title="Страна производитель" defaultOpen>
        <ul className="mx-5 mb-5 flex max-h-[170px] flex-col gap-3 overflow-y-auto pr-3 scrollbar-thin-brand">
          {vm.facets.countries.map((country) => (
            <li key={country.label}>
              <Checkbox
                checked={vm.params.countries.includes(country.label)}
                onChange={(on) => vm.toggleCountry(country.label, on)}
                label={country.label}
                count={country.count}
              />
            </li>
          ))}
        </ul>
      </Group>

      <Group title="Цвет" defaultOpen>
        <ul className="mx-5 mb-5 max-h-[150px] overflow-y-auto bg-graphite/60 px-3 py-2 scrollbar-thin-brand">
          {vm.facets.colors.map((color) => {
            const active = vm.params.color === color
            return (
              <li key={color}>
                <button
                  type="button"
                  onClick={() => vm.setColor(color)}
                  className={cn(
                    'flex w-full items-center gap-2 py-[7px] text-left text-[14px] transition-colors hover:text-brand',
                    active && 'text-brand',
                  )}
                >
                  {active && <span className="size-1.5 bg-brand" />}
                  {color}
                </button>
              </li>
            )
          })}
        </ul>
      </Group>

      <div className="px-5 pb-5 pt-4">
        <h4 className="mb-4 font-display text-[14px]">Способ доставки</h4>
        <ul className="flex flex-col gap-3">
          {DELIVERY.map((option) => (
            <li key={option.value}>
              <Radio
                checked={vm.params.delivery === option.value}
                onChange={() => vm.setDelivery(option.value)}
                label={option.label}
              />
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={vm.reset}
          disabled={!vm.hasFilters}
          className="mt-6 h-[46px] w-full bg-graphite text-[14px] uppercase text-white transition-colors duration-300 enabled:hover:bg-brand disabled:text-white/50"
        >
          Сбросить фильтр
        </button>
      </div>
    </div>
  )
}
