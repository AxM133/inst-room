import type { ReactNode } from 'react'
import { cn } from '../../../lib'
import { ChevronIcon } from '../../icons'
import type { CarouselController } from '../model/useCarousel'

interface CarouselTrackProps<T> {
  controller: CarouselController
  items: T[]
  getKey: (item: T) => string
  renderItem: (item: T, index: number) => ReactNode
  /** Tailwind classes that define the width of one slide. */
  itemClassName: string
  className?: string
}

export function CarouselTrack<T>({
  controller,
  items,
  getKey,
  renderItem,
  itemClassName,
  className,
}: CarouselTrackProps<T>) {
  return (
    <div
      ref={controller.ref}
      className={cn(
        '-m-3 flex snap-x snap-mandatory scroll-pl-3 gap-5 overflow-x-auto scroll-smooth p-3 scrollbar-none',
        className,
      )}
    >
      {items.map((item, index) => (
        <div key={getKey(item)} className={cn('shrink-0 snap-start', itemClassName)}>
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  )
}

interface CarouselArrowsProps {
  controller: CarouselController
  className?: string
  buttonClassName?: string
}

const ARROW =
  'grid size-[38px] place-items-center rounded-full bg-white text-black shadow-sm transition-all duration-300 ' +
  'enabled:hover:bg-brand enabled:hover:text-white enabled:active:scale-90 disabled:text-line'

export function CarouselArrows({ controller, className, buttonClassName }: CarouselArrowsProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <button
        type="button"
        aria-label="Назад"
        disabled={!controller.canPrev}
        onClick={controller.prev}
        className={cn(ARROW, buttonClassName)}
      >
        <ChevronIcon size={20} direction="left" />
      </button>
      <button
        type="button"
        aria-label="Вперёд"
        disabled={!controller.canNext}
        onClick={controller.next}
        className={cn(ARROW, buttonClassName)}
      >
        <ChevronIcon size={20} direction="right" />
      </button>
    </div>
  )
}

interface CarouselDotsProps {
  controller: CarouselController
  className?: string
}

export function CarouselDots({ controller, className }: CarouselDotsProps) {
  return (
    <div className={cn('flex items-center justify-center gap-1.5', className)}>
      {Array.from({ length: controller.count }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Слайд ${index + 1}`}
          onClick={() => controller.scrollTo(index)}
          className={cn(
            'size-1.5 rounded-full transition-all duration-300',
            index === controller.activeIndex ? 'scale-125 bg-brand' : 'bg-white/90 hover:bg-white',
          )}
        />
      ))}
    </div>
  )
}
