import { cn } from '@/shared/lib'
import { useContacts } from '../model/useContacts'

const SOCIAL_LABELS = { instagram: 'инстаграм', vk: 'вконтакте', facebook: 'фейсбук' } as const

export function ContactsMap() {
  const vm = useContacts()

  return (
    <section className="mt-[60px] grid lg:grid-cols-[951px_1fr]">
      <div className="relative h-[360px] overflow-hidden bg-graphite lg:h-[600px]">
        <img
          src={vm.map}
          alt="Карта проезда"
          className="size-full object-cover transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${vm.pan.x}px, ${vm.pan.y}px) scale(${vm.pan.scale})` }}
        />
      </div>

      <div className="px-4 py-8 lg:py-[0px] lg:pl-[108px]">
        <ul className="flex flex-col gap-5 lg:pt-0">
          {vm.offices.map((office) => {
            const active = office.id === vm.activeId
            return (
              <li key={office.id}>
                <button
                  type="button"
                  onMouseEnter={() => vm.setActive(office.id)}
                  onFocus={() => vm.setActive(office.id)}
                  onClick={() => vm.setActive(office.id)}
                  className={cn(
                    'block w-full max-w-[343px] px-[22px] py-3 text-left transition-all duration-300',
                    active ? 'scale-[1.02] bg-white shadow-card' : 'text-muted',
                  )}
                >
                  <span className="block font-display text-[20px] leading-6">{office.address}</span>
                  <span className="mt-3 block text-[16px] font-medium leading-5">{office.city}</span>
                  <span className="mt-4 block font-display text-[20px] leading-6">{office.phone}</span>
                </button>
              </li>
            )
          })}
        </ul>
        <div className="mt-[58px] flex items-center gap-4 px-[22px] font-display text-[16px] text-muted">
          {vm.socials.map((link, index) => (
            <span key={link.id} className="flex items-center gap-4">
              {index > 0 && <span className="h-[18px] w-px bg-muted" />}
              <a href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-black">
                {SOCIAL_LABELS[link.id]}
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
