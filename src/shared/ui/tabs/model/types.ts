import type { ReactNode } from 'react'

export interface TabItem<T extends string> {
  value: T
  label: ReactNode
  disabled?: boolean
}

export type TabsVariant = 'checkout' | 'product' | 'bar'
