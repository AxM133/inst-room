import type { ReactNode } from 'react'
import { ROTATION, type Direction, type IconProps } from '../model/types'

const Svg = ({ size = 24, children, ...rest }: IconProps & { children: ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
)

export const HeartIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 20.5S3.5 15.3 3.5 9.4A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 8.5 1.8c0 5.9-8.5 11.1-8.5 11.1z" />
  </Svg>
)

export const HeartFilledIcon = (p: IconProps) => (
  <Svg {...p} fill="currentColor" strokeWidth={1}>
    <path d="M12 20.5S3.5 15.3 3.5 9.4A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 8.5 1.8c0 5.9-8.5 11.1-8.5 11.1z" />
  </Svg>
)

export const CompareIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.6} strokeLinecap="butt">
    <path d="M6 12.5V19M12 5v14M18 9v10" />
  </Svg>
)

export const UserIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="10" r="3.2" />
    <path d="M5.8 18.6c1.3-2.5 3.7-3.8 6.2-3.8s4.9 1.3 6.2 3.8" />
  </Svg>
)

export const CartIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M2.5 4h2.6l2.4 10.2h10.2l2.3-7.4H6.1" />
    <circle cx="9.5" cy="19" r="1.1" />
    <circle cx="17" cy="19" r="1.1" />
  </Svg>
)

export const CheckCircleIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M7.6 12.4l3 3 6.2-6.6" />
  </Svg>
)

export const CheckIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={2}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Svg>
)

export const CloseIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.8}>
    <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
  </Svg>
)

export const ChevronIcon = ({ direction = 'right', style, ...p }: IconProps & { direction?: Direction }) => (
  <Svg
    {...p}
    strokeWidth={1.8}
    style={{ transform: `rotate(${ROTATION[direction]}deg)`, transition: 'transform .3s', ...style }}
  >
    <path d="M9 5l7 7-7 7" />
  </Svg>
)

export const ArrowIcon = ({ direction = 'right', style, ...p }: IconProps & { direction?: Direction }) => (
  <Svg
    {...p}
    strokeWidth={1.6}
    style={{ transform: `rotate(${ROTATION[direction]}deg)`, ...style }}
  >
    <path d="M4 12h16M13.5 5.5L20 12l-6.5 6.5" />
  </Svg>
)

export const SearchIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.5 15.5l5 5" />
  </Svg>
)

export const MenuIcon = (p: IconProps) => (
  <Svg {...p} strokeLinecap="butt">
    <path d="M3 6.5h18M3 12h18M3 17.5h12" />
  </Svg>
)

export const RefreshIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20.2 3.8v4.6h-4.6" />
  </Svg>
)

export const PlusIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.8}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
)

export const MinusIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.8}>
    <path d="M5 12h14" />
  </Svg>
)

export const GridIcon = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <rect x="3" y="3" width="4.5" height="4.5" />
    <rect x="9.75" y="3" width="4.5" height="4.5" />
    <rect x="16.5" y="3" width="4.5" height="4.5" />
    <rect x="3" y="9.75" width="4.5" height="4.5" />
    <rect x="9.75" y="9.75" width="4.5" height="4.5" />
    <rect x="16.5" y="9.75" width="4.5" height="4.5" />
    <rect x="3" y="16.5" width="4.5" height="4.5" />
    <rect x="9.75" y="16.5" width="4.5" height="4.5" />
    <rect x="16.5" y="16.5" width="4.5" height="4.5" />
  </Svg>
)

export const ListIcon = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <rect x="3" y="4" width="18" height="3.6" />
    <rect x="3" y="10.2" width="18" height="3.6" />
    <rect x="3" y="16.4" width="18" height="3.6" />
  </Svg>
)

export const InstagramIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.7}>
    <rect x="4" y="4" width="16" height="16" rx="5" />
    <circle cx="12" cy="12" r="3.7" />
    <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
  </Svg>
)

export const VkIcon = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none" viewBox="0 0 24 24">
    <path d="M12.8 17.4c-5.5 0-8.6-3.8-8.8-10h2.8c.1 4.6 2.1 6.5 3.7 6.9V7.4h2.6v4c1.6-.2 3.3-2 3.9-4h2.6c-.4 2.5-2.3 4.3-3.600 5 1.300.6 3.400 2.200 4.200 5h-2.900c-.6-1.900-2.100-3.300-4.200-3.500v3.500h-.3z" />
  </Svg>
)

export const FacebookIcon = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="M13.4 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.500 1.500-1.500h1.600V4.300c-.3 0-1.200-.1-2.300-.1-2.300 0-3.900 1.400-3.900 4v2.200H7.700v3h2.600V21h3.100z" />
  </Svg>
)
