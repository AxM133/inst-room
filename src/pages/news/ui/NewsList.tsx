import { NewsCard } from '@/entities/news'
import { useNewsList } from '../model/useNewsList'

export function NewsList() {
  const vm = useNewsList()
  return (
    <div className="mb-[80px] mt-8 grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
      {vm.items.map((item, index) => (
        <div key={item.key} className="animate-fade-up" style={{ animationDelay: `${(index % 6) * 60}ms` }}>
          <NewsCard item={item} />
        </div>
      ))}
    </div>
  )
}
