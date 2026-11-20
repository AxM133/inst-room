import { CATEGORY_IMAGES as IMG } from '@/shared/assets'
import type { Category, CollectionSlug, Subcategory } from './types'

const IMAGE_POOL = [IMG.hose, IMG.flapDisc, IMG.helmet, IMG.shears, IMG.peat, IMG.wheelbarrow, IMG.jacket]

const build = (items: Array<[string, string]>, offset = 0): Subcategory[] =>
  items.map(([slug, title], index) => ({
    slug,
    title,
    image: IMAGE_POOL[(index + offset) % IMAGE_POOL.length],
  }))

export const CATEGORIES: Category[] = [
  {
    slug: 'paint',
    title: 'Малярные товары',
    children: build(
      [
        ['enamels', 'Эмали'],
        ['primers-paint', 'Грунтовки'],
        ['water-paint', 'Водоэмульсионные краски'],
        ['varnish', 'Лаки и масла'],
        ['brushes', 'Кисти и валики'],
        ['solvents', 'Растворители'],
        ['putty', 'Шпатлёвки'],
        ['antiseptics', 'Антисептики'],
      ],
      2,
    ),
  },
  {
    slug: 'electric',
    title: 'Электрооборудование',
    children: build(
      [
        ['cables', 'Кабель и провод'],
        ['sockets', 'Розетки и выключатели'],
        ['lamps', 'Лампы и светильники'],
        ['extension', 'Удлинители'],
        ['bits', 'Биты и насадки'],
        ['screwdrivers', 'Отвёртки'],
        ['meters', 'Измерительные приборы'],
        ['boxes', 'Щиты и автоматы'],
      ],
      1,
    ),
  },
  {
    slug: 'workwear',
    title: 'Спецодежда',
    children: build(
      [
        ['suits', 'Куртки и костюмы'],
        ['gloves', 'Перчатки'],
        ['helmets', 'Каски и щитки'],
        ['boots', 'Спецобувь'],
        ['goggles', 'Очки защитные'],
        ['respirators', 'Респираторы'],
        ['vests', 'Жилеты сигнальные'],
        ['rain', 'Дождевики'],
      ],
      6,
    ),
  },
  {
    slug: 'seasonal',
    title: 'Сезонное',
    children: build(
      [
        ['shovels', 'Лопаты для снега'],
        ['scrapers', 'Щётки и скребки'],
        ['heaters', 'Обогреватели'],
        ['salt', 'Реагенты'],
        ['sleds', 'Санки'],
        ['snow-blowers', 'Снегоуборщики'],
        ['garlands', 'Гирлянды'],
        ['auto', 'Автоаксессуары'],
      ],
      4,
    ),
  },
  {
    slug: 'home',
    title: 'Для дома и дачи',
    children: build([
      ['garden-tools', 'Садово-огородный инвентарь'],
      ['watering', 'Поливочный инвентарь'],
      ['polycarbonate', 'Поликарбонат'],
      ['soil', 'Грунт'],
      ['pumps', 'Насосы'],
      ['mesh', 'Сетка Рабица'],
      ['shower', 'Летний душ, умывальники, рукомойники'],
      ['whitewash', 'Побелка, краска садовая'],
      ['decor', 'Садовый декор'],
      ['leisure', 'Товары для отдыха'],
      ['fertilizers', 'Удобрения'],
      ['stoves', 'Печное литьё и аксессуары'],
    ]),
  },
  {
    slug: 'tools',
    title: 'Инструменты',
    children: build(
      [
        ['hand', 'Ручной инструмент'],
        ['power', 'Электроинструмент'],
        ['measuring', 'Измерительный инструмент'],
        ['tiling', 'Плиточный инструмент'],
        ['foam', 'Монтажные пистолеты'],
        ['fasteners', 'Крепёж'],
        ['abrasives', 'Абразивы'],
        ['storage', 'Ящики и органайзеры'],
      ],
      3,
    ),
  },
]

export const COLLECTIONS: Record<CollectionSlug, string> = {
  new: 'Новинки',
  sale: 'Акции',
  hits: 'Хиты сезона',
}
