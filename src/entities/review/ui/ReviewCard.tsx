import type { Review } from '../model/store'

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="animate-fade-in rounded-[2px] border border-surface p-4 transition-shadow duration-300 hover:shadow-card">
      <h4 className="font-sans text-[14px] font-medium leading-4">{review.author}</h4>
      <time className="mt-0.5 block text-[10px] leading-3 text-muted">{review.date}</time>
      <p className="mt-2 line-clamp-3 text-[14px] leading-5">{review.text}</p>
      <div className="mt-1 text-right">
        <span className="text-[10px] text-brand">Далее</span>
      </div>
    </article>
  )
}
