import { cn } from '@/shared/lib'
import { MinusIcon, PlusIcon } from '@/shared/ui'
import { useQuantity } from '../model/useQuantity'

interface QuantityStepperProps {
  productId: string
  qty: number
}

export function QuantityStepper({ productId, qty }: QuantityStepperProps) {
  const { increase, decrease, canDecrease } = useQuantity(productId, qty)

  return (
    <div className="inline-flex h-10 items-center">
      <button
        type="button"
        aria-label="Уменьшить количество"
        disabled={!canDecrease}
        onClick={decrease}
        className={cn('grid size-10 place-items-center transition-colors', canDecrease ? 'text-black hover:text-brand' : 'text-line')}
      >
        <MinusIcon size={22} />
      </button>
      <span key={qty} className="grid h-6 w-10 animate-fade-in place-items-center border-x border-line text-[14px] font-medium">
        {qty}
      </span>
      <button
        type="button"
        aria-label="Увеличить количество"
        onClick={increase}
        className="grid size-10 place-items-center text-black transition-all hover:text-brand active:scale-90"
      >
        <PlusIcon size={22} />
      </button>
    </div>
  )
}
