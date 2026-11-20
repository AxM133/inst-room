import { cn } from '@/shared/lib'
import { GridIcon, ListIcon, Select } from '@/shared/ui'
import { useCatalogToolbar } from '../model/useCatalogToolbar'

export function CatalogToolbar({ className }: { className?: string }) {
  const vm = useCatalogToolbar()

  return (
    <div className={cn('flex items-center justify-between gap-4 text-[14px]', className)}>
      <div className="flex items-center gap-3">
        <span className="font-bold">Сортировать:</span>
        <Select variant="inline" options={vm.options} value={vm.sort} onChange={vm.setSort} />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-bold">Вид:</span>
        <button
          type="button"
          aria-label="Плиткой"
          aria-pressed={vm.view === 'grid'}
          onClick={() => vm.setView('grid')}
          className={cn('transition-colors', vm.view === 'grid' ? 'text-black' : 'text-line hover:text-muted')}
        >
          <GridIcon size={18} />
        </button>
        <button
          type="button"
          aria-label="Списком"
          aria-pressed={vm.view === 'list'}
          onClick={() => vm.setView('list')}
          className={cn('transition-colors', vm.view === 'list' ? 'text-black' : 'text-line hover:text-muted')}
        >
          <ListIcon size={18} />
        </button>
      </div>
    </div>
  )
}
