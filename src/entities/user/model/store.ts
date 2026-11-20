import { createStore } from '@/shared/lib'

export interface Profile {
  lastName: string
  firstName: string
  phone: string
  email: string
  city: string
  street: string
  building: string
  house: string
  flat: string
}

export interface UserState {
  isAuth: boolean
  profile: Profile
}

export const EMPTY_PROFILE: Profile = {
  lastName: '',
  firstName: '',
  phone: '',
  email: '',
  city: '',
  street: '',
  building: '',
  house: '',
  flat: '',
}

const DEMO_PROFILE: Profile = {
  lastName: 'Смирнов',
  firstName: 'Александр',
  phone: '+7 495 323-15-15',
  email: 'cmirnoval@gmail.com',
  city: '',
  street: '1-й пр-т Победителей',
  building: '2',
  house: '16',
  flat: '301',
}

export const userStore = createStore<UserState>({ isAuth: false, profile: EMPTY_PROFILE }, 'inst-room:user')

export const signIn = (phone: string) =>
  userStore.set((s) => ({
    isAuth: true,
    profile: s.profile.lastName ? { ...s.profile, phone } : { ...DEMO_PROFILE, phone },
  }))

export const signUp = (profile: Partial<Profile>) =>
  userStore.set({ isAuth: true, profile: { ...EMPTY_PROFILE, ...profile } })

export const signOut = () => userStore.set((s) => ({ ...s, isAuth: false }))

export const updateProfile = (patch: Partial<Profile>) =>
  userStore.set((s) => ({ ...s, profile: { ...s.profile, ...patch } }))

export const useUser = () => userStore.use()
