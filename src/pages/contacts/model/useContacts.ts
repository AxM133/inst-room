import { useState } from 'react'
import { MISC_IMAGES } from '@/shared/assets'
import { SOCIAL_LINKS } from '@/shared/ui'

export interface Office {
  id: string
  address: string
  city: string
  phone: string
  /** pan applied to the map image to hint a different location */
  pan: { x: number; y: number; scale: number }
}

export const OFFICES: Office[] = [
  { id: 'mozhaisk', address: 'ул. 1-я Дубравная, 15', city: 'г. Можайск, Московская область', phone: '+7 495 120-32-15', pan: { x: 0, y: 0, scale: 1 } },
  { id: 'krasnodar', address: 'ул. Маяковского, 120', city: 'г. Краснодар', phone: '+7 495 110-10-12', pan: { x: -50, y: 30, scale: 1.12 } },
  { id: 'spb', address: 'ул. Маршака, 2', city: 'г. Санкт-Петербург', phone: '+7 495 560-12-11', pan: { x: 40, y: -40, scale: 1.12 } },
]

export function useContacts() {
  const [activeId, setActiveId] = useState(OFFICES[1].id)
  const active = OFFICES.find((o) => o.id === activeId) ?? OFFICES[0]

  return {
    offices: OFFICES,
    activeId,
    setActive: setActiveId,
    map: MISC_IMAGES.map,
    pan: active.pan,
    socials: SOCIAL_LINKS,
  }
}
