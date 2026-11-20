export const getPageWindow = (page: number, total: number): number[] => {
  const start = Math.max(1, Math.min(page - 1, total - 2))
  const end = Math.min(total, start + 2)
  const pages: number[] = []
  for (let p = start; p <= end; p += 1) pages.push(p)
  return pages
}
