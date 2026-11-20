const numberFormat = new Intl.NumberFormat('ru-RU')

export const formatPrice = (value: number): string => `${numberFormat.format(value)} ₽`

export const formatNumber = (value: number): string => numberFormat.format(value)

/** "+7 495 323-15-15" mask. Accepts any user input. */
export const maskPhone = (input: string): string => {
  let digits = input.replace(/\D/g, '')
  if (digits.startsWith('7') || digits.startsWith('8')) digits = digits.slice(1)
  digits = digits.slice(0, 10)
  if (!digits) return input.startsWith('+') ? '+7' : ''

  const a = digits.slice(0, 3)
  const b = digits.slice(3, 6)
  const c = digits.slice(6, 8)
  const d = digits.slice(8, 10)

  let out = `+7 ${a}`
  if (b) out += ` ${b}`
  if (c) out += `-${c}`
  if (d) out += `-${d}`
  return out
}

export const isFullPhone = (value: string): boolean => value.replace(/\D/g, '').length === 11

export const maskPhoneTail = (phone: string): string => {
  const digits = phone.replace(/\D/g, '')
  return `${'*'.repeat(Math.max(digits.length - 4, 0))}${digits.slice(-4)}`
}

export const formatTimer = (seconds: number): string => {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0')
  const s = String(seconds % 60).padStart(2, '0')
  return `${m}:${s}`
}

export const pluralize = (n: number, forms: [string, string, string]): string => {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return forms[0]
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1]
  return forms[2]
}
