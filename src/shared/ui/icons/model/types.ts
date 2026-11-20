import type { SVGProps } from 'react'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  size?: number
}

export type Direction = 'up' | 'right' | 'down' | 'left'

export const ROTATION: Record<Direction, number> = { right: 0, down: 90, left: 180, up: 270 }
