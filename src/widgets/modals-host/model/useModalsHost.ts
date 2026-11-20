import { useNavigate } from 'react-router'
import { ROUTES } from '@/shared/config'
import { closeModal, useModalState } from '@/shared/lib'

export function useModalsHost() {
  const modal = useModalState()
  const navigate = useNavigate()

  return {
    modal,
    close: closeModal,
    goHome: () => {
      closeModal()
      navigate(ROUTES.home)
    },
  }
}
