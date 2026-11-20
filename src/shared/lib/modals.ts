import { createStore } from './store'

export type ModalState =
  | { kind: null }
  | { kind: 'login' }
  | { kind: 'register' }
  | { kind: 'callback' }
  | { kind: 'review' }
  | { kind: 'thanks'; title: string; text: string; cta?: string }

export const modalStore = createStore<ModalState>({ kind: null })

export const openModal = (modal: Exclude<ModalState, { kind: null }>) => modalStore.set(modal)
export const closeModal = () => modalStore.set({ kind: null })
export const useModalState = () => modalStore.use()
