import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Breadcrumbs, ButtonLink, Price } from '@/shared/ui'
import { StockLabel } from '@/entities/product'
import { AddToCartButton } from '@/features/cart-add'
import { CompareToggle } from '@/features/compare-toggle'
import { FavoriteToggle } from '@/features/favorite-toggle'
import { useProductDetails } from '../model/useProductDetails'
import type { ReactNode } from 'react'

export function ProductDetails({ children }: { children?: ReactNode }) {
  const vm = useProductDetails()

  if (!vm.product) {
    return (
      <div className="animate-fade-up bg-white p-12 text-center">
        <p className="font-display text-[24px]">Товар не найден</p>
        <ButtonLink to={ROUTES.catalog} className="mt-6">
          В каталог
        </ButtonLink>
      </div>
    )
  }

  const { product, brand } = vm

  return (
    <>
      <Breadcrumbs items={vm.crumbs} />
      <div className="mt-5 animate-fade-up bg-white">
        <div className="grid gap-8 px-6 pb-10 pt-8 lg:grid-cols-[1fr_1fr] lg:px-[46px]">
          <div>
            <div className="grid h-[320px] place-items-center sm:h-[420px]">
              <img
                key={vm.activeImage}
                src={product.gallery[vm.activeImage]}
                alt={product.name}
                className="max-h-full max-w-full animate-fade-in object-contain"
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-3 lg:pl-8">
              {product.gallery.map((src, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Фото ${index + 1}`}
                  onClick={() => vm.setActiveImage(index)}
                  className={cn(
                    'grid size-[70px] place-items-center bg-white p-1 transition-all duration-300 hover:-translate-y-0.5',
                    index === vm.activeImage ? 'shadow-card' : 'shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
                  )}
                >
                  <img src={src} alt="" className="max-h-full max-w-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div className="relative lg:pt-12">
            {brand && (
              <Link
                to={ROUTES.brand(brand.id)}
                title={brand.name}
                className="mb-4 block w-[100px] transition-transform duration-300 hover:scale-105 lg:absolute lg:right-0 lg:top-0 lg:mb-0"
              >
                <img src={brand.logo} alt={brand.name} className="w-full object-contain mix-blend-multiply" />
              </Link>
            )}
            <h1 className="max-w-[460px] font-display text-[26px] leading-[26px] sm:text-[30px] sm:leading-8">{product.name}</h1>
            <StockLabel inStock={product.inStock} className="mt-[22px] !text-[14px]" />
            <p className="mt-5 max-w-[330px] text-[14px] leading-[16px]">{product.description}</p>
            <Price value={product.price} oldValue={product.oldPrice} size="lg" className="mt-[50px]" />
            <div className="mt-[30px] flex items-center gap-6">
              <AddToCartButton productId={product.id} variant="primary" />
              <CompareToggle productId={product.id} size={32} />
              <FavoriteToggle productId={product.id} size={32} />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}
