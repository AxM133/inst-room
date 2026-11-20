import { ROUTES } from '@/shared/config'
import { ButtonLink } from '@/shared/ui'
import { NOT_FOUND } from '../model/content'

export function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-surface px-4">
      <img src={NOT_FOUND.left} alt="" className="pointer-events-none absolute left-0 top-0 hidden h-full w-[33%] object-cover opacity-70 [mask-image:linear-gradient(to_right,black_75%,transparent)] md:block" />
      <img src={NOT_FOUND.right} alt="" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[33%] object-cover opacity-70 [mask-image:linear-gradient(to_left,black_75%,transparent)] md:block" />

      <div className="relative z-10 flex flex-col items-center pb-24 text-center">
        <h1 className="animate-fade-up font-display text-[22px] leading-8 sm:text-[30px]">{NOT_FOUND.title}</h1>
        <p className="mt-9 max-w-[420px] animate-fade-up text-[20px] font-medium leading-7 [animation-delay:120ms]">{NOT_FOUND.text}</p>
        <ButtonLink to={ROUTES.home} className="mt-9 h-[72px] animate-fade-up px-10 [animation-delay:220ms]">
          {NOT_FOUND.cta}
        </ButtonLink>
        <p className="mt-[100px] animate-pop font-display text-[120px] leading-none sm:text-[220px] [animation-delay:300ms]">404</p>
      </div>
    </main>
  )
}
