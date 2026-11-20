import { useCallback, useEffect, useState } from 'react'

export function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds)

  useEffect(() => {
    if (left <= 0) return
    const id = window.setTimeout(() => setLeft((v) => v - 1), 1000)
    return () => window.clearTimeout(id)
  }, [left])

  const restart = useCallback(() => setLeft(seconds), [seconds])

  return { left, restart, isFinished: left <= 0 }
}
