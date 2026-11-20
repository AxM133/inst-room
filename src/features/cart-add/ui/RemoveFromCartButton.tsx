import { CloseIcon } from '@/shared/ui'
import { useQuantity } from '../model/useQuantity'

export function RemoveFromCartButton({ productId }: { productId: string }) {
  const { remove } = useQuantity(productId, 1)
  return (
    <button
      type="button"
      aria-label="Удалить из корзины"
      onClick={remove}
      className="grid size-8 place-items-center text-muted transition-all duration-300 hover:rotate-90 hover:text-black"
    >
      <CloseIcon size={22} />
    </button>
  )
}
