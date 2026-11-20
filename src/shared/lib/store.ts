import { useSyncExternalStore } from 'react'

type Updater<T> = T | ((prev: T) => T)

export interface Store<T> {
  get: () => T
  set: (next: Updater<T>) => void
  subscribe: (listener: () => void) => () => void
  /** React hook: subscribes a component to the store. */
  use: () => T
}

/**
 * Generic tiny external store. When `persistKey` is passed the value is
 * mirrored to localStorage, so cart / favorites survive a reload.
 */
export function createStore<T>(initial: T, persistKey?: string): Store<T> {
  let state = initial

  if (persistKey && typeof localStorage !== 'undefined') {
    try {
      const raw = localStorage.getItem(persistKey)
      if (raw) state = JSON.parse(raw) as T
    } catch {
      state = initial
    }
  }

  const listeners = new Set<() => void>()

  const get = () => state

  const set = (next: Updater<T>) => {
    state = typeof next === 'function' ? (next as (prev: T) => T)(state) : next
    if (persistKey) {
      try {
        localStorage.setItem(persistKey, JSON.stringify(state))
      } catch {
        /* storage unavailable — ignore */
      }
    }
    listeners.forEach((listener) => listener())
  }

  const subscribe = (listener: () => void) => {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }

  const use = () => useSyncExternalStore(subscribe, get, get)

  return { get, set, subscribe, use }
}
