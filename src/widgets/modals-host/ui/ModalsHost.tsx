import { Button, Modal } from '@/shared/ui'
import { LoginForm, RegisterForm } from '@/features/auth'
import { CallbackForm } from '@/features/callback'
import { ReviewForm } from '@/features/leave-review'
import { useModalsHost } from '../model/useModalsHost'

const NARROW = 'max-w-[422px] sm:!px-[56px]'
const MEDIUM = 'max-w-[622px] sm:!px-[156px]'

export function ModalsHost() {
  const vm = useModalsHost()
  const { modal } = vm

  switch (modal.kind) {
    case 'login':
      return (
        <Modal onClose={vm.close} className={NARROW}>
          <LoginForm />
        </Modal>
      )
    case 'register':
      return (
        <Modal onClose={vm.close} title="Регистрация" className={MEDIUM}>
          <RegisterForm />
        </Modal>
      )
    case 'callback':
      return (
        <Modal onClose={vm.close} title="Заказать звонок" className={MEDIUM}>
          <CallbackForm />
        </Modal>
      )
    case 'review':
      return (
        <Modal onClose={vm.close} title="Оставить отзыв" className="max-w-[700px] sm:!px-[46px]">
          <ReviewForm />
        </Modal>
      )
    case 'thanks':
      return (
        <Modal onClose={vm.close} title={modal.title} className="max-w-[422px] pb-12 sm:!px-[40px]" titleClassName="text-[18px]">
          <p className="mx-auto max-w-[260px] text-center text-[16px] leading-5">{modal.text}</p>
          <div className="mt-[60px] flex justify-center">
            <Button variant="primary" className="h-[46px] px-10" onClick={vm.goHome}>
              {modal.cta ?? 'На главную'}
            </Button>
          </div>
        </Modal>
      )
    default:
      return null
  }
}
