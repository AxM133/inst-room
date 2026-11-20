import type { ReactNode } from 'react'
import { cn } from '../../../lib'
import { CloseIcon } from '../../icons'
import { useModalBehavior } from '../model/useModalBehavior'

interface ModalProps {
  onClose: () => void
  title?: ReactNode
  children: ReactNode
  className?: string
  titleClassName?: string
}

export function Modal({ onClose, title, children, className, titleClassName }: ModalProps) {
  useModalBehavior(onClose)

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 animate-fade-in bg-black/70 backdrop-blur-[2px]" onClick={onClose} />
      <div
        className={cn(
          'relative my-auto w-full animate-scale-in bg-white px-6 pb-10 pt-[60px] shadow-pop sm:px-[46px]',
          className ?? 'max-w-[422px]',
        )}
      >
        <button
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          className="absolute right-[18px] top-[18px] grid size-8 place-items-center text-black transition-all duration-300 hover:rotate-90 hover:text-brand"
        >
          <CloseIcon size={24} />
        </button>
        {title && (
          <h2 className={cn('mb-8 text-center font-display text-[20px] leading-6', titleClassName)}>{title}</h2>
        )}
        {children}
      </div>
    </div>
  )
}
