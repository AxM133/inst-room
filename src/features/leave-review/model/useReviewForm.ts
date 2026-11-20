import { useForm } from 'react-hook-form'
import { closeModal } from '@/shared/lib'
import { addReview } from '@/entities/review'

export interface ReviewValues {
  author: string
  text: string
}

export function useReviewForm() {
  const form = useForm<ReviewValues>({ defaultValues: { author: '', text: '' } })

  const onSubmit = form.handleSubmit(({ author, text }) => {
    addReview(author.trim(), text.trim())
    closeModal()
  })

  return {
    control: form.control,
    onSubmit,
    rules: {
      author: { required: 'Укажите имя' },
      text: { required: 'Напишите отзыв', minLength: { value: 10, message: 'Минимум 10 символов' } },
    },
  }
}
