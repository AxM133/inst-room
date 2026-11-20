import { Button, TextAreaField, TextField } from '@/shared/ui'
import { useReviewForm } from '../model/useReviewForm'

export function ReviewForm() {
  const vm = useReviewForm()

  return (
    <form onSubmit={vm.onSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-6">
        <span className="font-display text-[12px] leading-4 sm:pt-5">Ваше имя</span>
        <TextField control={vm.control} name="author" label="" placeholder="Ваше имя" rules={vm.rules.author} />
      </div>
      <div className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-6">
        <span className="font-display text-[12px] leading-4">
          Оставьте свой
          <br />
          комментарий
        </span>
        <TextAreaField control={vm.control} name="text" label="" placeholder="Ваш комментарий" rows={5} rules={vm.rules.text} />
      </div>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="max-w-[210px] text-[10px] leading-3 text-muted">
          Перед отправкой отзыва, пожалуйста, ознакомьтесь с правилами публикации.
        </p>
        <Button type="submit" variant="primary" className="h-[40px] px-7 text-[12px]">
          Опубликовать
        </Button>
      </div>
    </form>
  )
}
