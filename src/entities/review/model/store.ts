import { createStore } from '@/shared/lib'

export interface Review {
  id: string
  author: string
  date: string
  text: string
}

const TEXT =
  'Неделю назад покрасила деревья. Температура была околонулевая, краскопультом не получилось, только кистью. Прилагаю фото после первого дождя'

const SEED: Review[] = Array.from({ length: 10 }, (_, i) => ({
  id: `seed-${i}`,
  author: 'Анна Фёдорова',
  date: '08.11.2022',
  text: TEXT,
}))

export const reviewsStore = createStore<Review[]>(SEED)

export const addReview = (author: string, text: string) =>
  reviewsStore.set((list) => [
    { id: `r-${Date.now()}`, author, text, date: new Date().toLocaleDateString('ru-RU') },
    ...list,
  ])

export const useReviews = () => reviewsStore.use()
