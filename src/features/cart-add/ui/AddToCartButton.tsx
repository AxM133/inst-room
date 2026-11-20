import { cn } from '@/shared/lib'
import { buttonStyles, CartIcon, CheckCircleIcon } from '@/shared/ui'
import { useAddToCart } from '../model/useAddToCart'

interface AddToCartButtonProps {
  productId: string
  variant?: 'square' | 'primary' | 'compact'
  className?: string
}

export function AddToCartButton({ productId, variant = 'square', className }: AddToCartButtonProps) {
  const { inCart, onClick } = useAddToCart(productId)
  const icon = inCart ? (
    <CheckCircleIcon key="in" size={32} className="animate-pop" />
  ) : (
    <CartIcon key="out" size={32} />
  )

  if (variant === 'primary') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={buttonStyles(inCart ? 'dark' : 'primary', 'md', false, cn('min-w-[160px]', className))}
      >
        {inCart ? (
          <>
            <CheckCircleIcon size={20} className="animate-pop" /> В корзине
          </>
        ) : (
          'В корзину'
        )}
      </button>
    )
  }

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={inCart ? 'Перейти в корзину' : 'В корзину'}
        className={cn('text-brand transition-transform duration-300 hover:scale-110 active:scale-90', className)}
      >
        {inCart ? <CheckCircleIcon key="in" size={28} className="animate-pop" /> : <CartIcon key="out" size={28} />}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={inCart ? 'Перейти в корзину' : 'В корзину'}
      title={inCart ? 'Перейти в корзину' : 'В корзину'}
      className={cn(
        'grid h-[56px] w-[60px] place-items-center rounded-[4px] border border-brand transition-all duration-300 active:scale-95',
        inCart ? 'bg-brand text-white' : 'bg-white text-brand hover:bg-brand hover:text-white',
        className,
      )}
    >
      {icon}
    </button>
  )
}

