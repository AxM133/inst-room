import { PRODUCT_IMAGES as IMG } from '@/shared/assets'
import type { DeliveryKind, Product } from './types'

interface Template {
  name: string
  weight: string
  image: string
  topSlug: string
  price: number
  description: string
  specs: Product['specs']
  color: string
  brandId?: string
}

const PAINT_DESC =
  'Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка, светостойкая, термостойкая, защита от вредителей'
const TOOL_DESC =
  'Надёжный инструмент для ежедневной работы: прочный корпус, удобная эргономика, долгий срок службы. Подходит для профессионального и бытового использования'
const WEAR_DESC =
  'Износостойкий материал, усиленные швы и удобный крой. Защищает от загрязнений, ветра и влаги, не стесняет движений при работе'
const SEASON_DESC =
  'Лёгкий и прочный инвентарь для уборки снега и ухода за участком в холодное время года. Морозостойкий пластик и усиленная кромка'

const PAINT_SPECS: Product['specs'] = [
  ['Расход', 'от 0,15 до 0,18 кг/м2'],
  ['Назначение', 'Для деревьев'],
  ['Тип работ', 'Наружное'],
  ['Упаковка', 'Ведро'],
  ['Время высыхания', '1ч'],
]
const toolSpecs = (material: string, kind: string): Product['specs'] => [
  ['Материал', material],
  ['Назначение', kind],
  ['Тип работ', 'Универсальное'],
  ['Упаковка', 'Блистер'],
  ['Гарантия', '12 месяцев'],
]

const TEMPLATES: Template[] = [
  { name: 'Эмаль Condor ПФ-115 жёлтая', weight: '1,8 кг', image: IMG.bucketObjekt, topSlug: 'paint', price: 500, description: PAINT_DESC, specs: PAINT_SPECS, color: 'Жёлтый' },
  { name: 'Эмаль Condor ПФ-115 чёрная', weight: '0,9 кг', image: IMG.enamelBlack, topSlug: 'paint', price: 450, description: PAINT_DESC, specs: PAINT_SPECS, color: 'Красный' },
  { name: 'Краска Farbitex для садовых деревьев', weight: '10 кг', image: IMG.farbitex, topSlug: 'paint', price: 500, description: PAINT_DESC, specs: PAINT_SPECS, color: 'Розовый', brandId: 'farbitex' },
  { name: 'Антисептик Goldbastik для дерева', weight: '5 л', image: IMG.canister, topSlug: 'paint', price: 890, description: PAINT_DESC, specs: PAINT_SPECS, color: 'Зелёный' },
  { name: 'Бита крестовая PH2 50 мм', weight: '10 г', image: IMG.bit, topSlug: 'electric', price: 120, description: TOOL_DESC, specs: toolSpecs('Сталь S2', 'Шуруповёрты'), color: 'Белый' },
  { name: 'Отвёртка диэлектрическая шлицевая', weight: '120 г', image: IMG.screwdriver, topSlug: 'electric', price: 310, description: TOOL_DESC, specs: toolSpecs('Хром-ванадий', 'Электромонтаж до 1000 В'), color: 'Красный' },
  { name: 'Каска строительная оранжевая', weight: '350 г', image: IMG.helmet, topSlug: 'workwear', price: 380, description: WEAR_DESC, specs: toolSpecs('Полиэтилен', 'Защита головы'), color: 'Оранжевый' },
  { name: 'Куртка рабочая утеплённая', weight: '1,1 кг', image: IMG.jacket, topSlug: 'workwear', price: 2490, description: WEAR_DESC, specs: toolSpecs('Хлопок 65%', 'Холодное время года'), color: 'Голубой' },
  { name: 'Ножницы по металлу правые', weight: '420 г', image: IMG.shears, topSlug: 'home', price: 690, description: TOOL_DESC, specs: toolSpecs('Сталь CrV', 'Резка листового металла'), color: 'Оранжевый' },
  { name: 'Вилы садовые 4 зуба', weight: '1,6 кг', image: IMG.pitchfork, topSlug: 'home', price: 740, description: TOOL_DESC, specs: toolSpecs('Сталь, дерево', 'Работа с землёй'), color: 'Белый' },
  { name: 'Лопата для уборки снега', weight: '1,2 кг', image: IMG.shovel, topSlug: 'seasonal', price: 560, description: SEASON_DESC, specs: toolSpecs('Пластик, алюминий', 'Уборка снега'), color: 'Розовый' },
  { name: 'Щётка-сметка для снега', weight: '300 г', image: IMG.brush, topSlug: 'seasonal', price: 190, description: SEASON_DESC, specs: toolSpecs('Пластик', 'Автомобиль'), color: 'Оранжевый' },
  { name: 'Система выравнивания плитки', weight: '650 г', image: IMG.tileTool, topSlug: 'tools', price: 1190, description: TOOL_DESC, specs: toolSpecs('Сталь, пластик', 'Плиточные работы'), color: 'Оранжевый' },
  { name: 'Пистолет для монтажной пены', weight: '480 г', image: IMG.foamGun, topSlug: 'tools', price: 830, description: TOOL_DESC, specs: toolSpecs('Алюминий', 'Монтажная пена'), color: 'Голубой' },
]

/** Brands that plausibly sell each kind of goods. */
const BRAND_POOLS: Record<string, string[]> = {
  paint: ['farbitex', 'ceresit', 'snezka', 'finland'],
  electric: ['kapro', 'centro', 'truper'],
  workwear: ['truper', 'finland', 'centro'],
  home: ['truper', 'kapro', 'centro', 'snezka'],
  seasonal: ['finland', 'truper', 'snezka'],
  tools: ['kapro', 'centro', 'truper', 'pfizer'],
}

export const COUNTRIES = ['Англия', 'Болгария', 'Венесуэлла', 'Испания', 'Италия', 'Португалия', 'Россия', 'Словения']
export const COLORS = ['Белый', 'Голубой', 'Жёлтый', 'Зелёный', 'Красный', 'Оранжевый', 'Розовый']

const DELIVERY: DeliveryKind[] = ['both', 'courier', 'pickup', 'both']
const TOTAL = 126

const round10 = (n: number) => Math.round(n / 10) * 10

export const PRODUCTS: Product[] = Array.from({ length: TOTAL }, (_, i) => {
  const t = TEMPLATES[i % TEMPLATES.length]
  const variant = Math.floor(i / TEMPLATES.length)
  const price = round10(t.price * (1 + variant * 0.08) + ((i * 37) % 60))
  const hasDiscount = i % 3 !== 1
  const badge = i % 11 === 5 ? 'sale' : i % 3 === 0 ? 'new' : undefined

  return {
    id: String(i + 1),
    name: t.name,
    weight: t.weight,
    description: t.description,
    price,
    oldPrice: hasDiscount ? round10(price * 1.44) : undefined,
    image: t.image,
    gallery: [t.image, t.image, t.image, t.image, t.image],
    badge,
    inStock: i % 7 !== 3,
    brandId: t.brandId ?? BRAND_POOLS[t.topSlug][(i + variant) % BRAND_POOLS[t.topSlug].length],
    country: COUNTRIES[(i * 5 + 2) % COUNTRIES.length],
    color: t.color,
    delivery: DELIVERY[i % DELIVERY.length],
    topSlug: t.topSlug,
    popularity: ((i * 53) % 97) + 3,
    order: i,
    specs: t.specs,
  }
})
