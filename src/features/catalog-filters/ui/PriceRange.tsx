import { formatNumber } from '@/shared/lib'

interface PriceRangeProps {
  bounds: { min: number; max: number }
  value: { min: number; max: number }
  onMin: (value: number) => void
  onMax: (value: number) => void
}

export function PriceRange({ bounds, value, onMin, onMax }: PriceRangeProps) {
  const span = Math.max(bounds.max - bounds.min, 1)
  const left = ((value.min - bounds.min) / span) * 100
  const right = ((value.max - bounds.min) / span) * 100

  return (
    <div className="px-5 pb-5">
      <div className="relative mx-1.5 mt-2 h-3">
        <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-line/40" />
        <div
          className="absolute top-1/2 h-[2px] -translate-y-1/2 bg-brand transition-all duration-150"
          style={{ left: `${left}%`, width: `${Math.max(right - left, 0)}%` }}
        />
        <input
          type="range"
          className="range-brand"
          aria-label="Минимальная цена"
          min={bounds.min}
          max={bounds.max}
          value={value.min}
          onChange={(e) => onMin(Number(e.target.value))}
        />
        <input
          type="range"
          className="range-brand"
          aria-label="Максимальная цена"
          min={bounds.min}
          max={bounds.max}
          value={value.max}
          onChange={(e) => onMax(Number(e.target.value))}
        />
      </div>
      <div className="mt-4 flex items-center gap-3 text-white">
        <span className="grid h-7 w-[60px] place-items-center bg-white text-[12px] text-black">{formatNumber(value.min)}</span>
        <span>—</span>
        <span className="grid h-7 w-[60px] place-items-center bg-white text-[12px] text-black">{formatNumber(value.max)}</span>
      </div>
    </div>
  )
}
