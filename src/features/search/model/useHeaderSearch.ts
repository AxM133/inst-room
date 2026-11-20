import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { ROUTES } from '@/shared/config'
import { useOutsideClick } from '@/shared/lib'
import { queryProducts } from '@/entities/product'

export function useHeaderSearch() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const close = useCallback(() => setOpen(false), [])
  useOutsideClick(ref, close, open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  const trimmed = query.trim()
  const results = useMemo(() => (trimmed ? queryProducts({ search: trimmed, sort: 'popular' }) : []), [trimmed])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setOpen(true)
  }

  const showAll = useCallback(() => {
    navigate(`${ROUTES.category('search')}?q=${encodeURIComponent(trimmed)}`)
    setOpen(false)
  }, [navigate, trimmed])

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (trimmed) showAll()
  }

  const pick = useCallback(() => {
    setOpen(false)
    setQuery('')
  }, [])

  return {
    ref,
    query,
    open,
    results,
    hasQuery: trimmed.length > 0,
    onChange,
    onFocus: () => setOpen(true),
    onSubmit,
    showAll,
    pick,
  }
}
