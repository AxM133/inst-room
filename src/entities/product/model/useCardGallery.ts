import { useCallback, useState, type MouseEvent } from 'react'

/** Hovering the image scrubs through the gallery segments (4 bars in the design). */
export function useCardGallery(segments = 4, initial = 1) {
  const [active, setActive] = useState(initial)

  const onMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const ratio = (event.clientX - rect.left) / rect.width
      setActive(Math.min(segments - 1, Math.max(0, Math.floor(ratio * segments))))
    },
    [segments],
  )

  const onLeave = useCallback(() => setActive(initial), [initial])

  return { active, onMove, onLeave, segments }
}
