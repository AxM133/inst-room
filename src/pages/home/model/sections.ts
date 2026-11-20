import { CATEGORIES } from '@/entities/category'

/** Order of the showcase on the home page (see design). */
export const SHOWCASE_SLUGS = ['paint', 'electric', 'workwear', 'home', 'seasonal', 'tools']

export const SHOWCASE_SECTIONS = SHOWCASE_SLUGS.map((slug) => CATEGORIES.find((c) => c.slug === slug)!).filter(Boolean)
