import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'

export function ConsentNote({ className }: { className?: string }) {
  return (
    <p className={cn('text-[12px] leading-4 text-muted', className)}>
      Нажимая на кнопку вы соглашаетесь{' '}
      <Link to={ROUTES.privacy} className="text-black underline-offset-2 transition-colors hover:text-brand hover:underline">
        на обработку ваших персональных данных
      </Link>
    </p>
  )
}
