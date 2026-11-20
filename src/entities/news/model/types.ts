export interface NewsItem {
  id: string
  title: string
  date: string
  image: string
  excerpt: string
}

export type ArticleBlock =
  | { type: 'text'; paragraphs: string[] }
  | { type: 'quote-grid'; quote: string[]; textTop: string[]; textBottom: string[]; image: string }
  | { type: 'list'; title: string; items: string[] }
  | { type: 'table'; title: string; paragraphs: string[]; head: string[]; rows: string[][] }
  | { type: 'banner'; image: string; quote: string[] }

export interface Article {
  id: string
  title: string
  heroImage: string
  blocks: ArticleBlock[]
}
