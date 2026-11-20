# Inst room

Интернет-магазин инструмента по макетам из FIGMA по ссылке [Link](https://www.figma.com/design/0NNlv3ZgE6MvQc3YTWW85M/Inst-room--Copy-?node-id=0-1&p=f&t=3D0URzsZL4iHLlhD-0).
React 19 + TypeScript, Tailwind CSS 4, react-router 8, react-hook-form, архитектура Feature-Sliced Design.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc + vite build
```

## Архитектура (FSD)

```
src/
  app/        роутер, MainLayout, глобальные стили, точка входа
  pages/      18 страниц — только композиция виджетов
  widgets/    самостоятельные блоки страниц (шапка, каталог, корзина, ...)
  features/   пользовательские сценарии (вход, поиск, фильтры, оформление, ...)
  entities/   бизнес-сущности (product, category, brand, cart, order, user, ...)
  shared/     ui-кит, lib, config, assets
```

У каждого слайса (страницы, виджета, фичи, сущности) две папки:

- `ui/` — только разметка;
- `model/` — типы, данные, хуки, обработчики, валидация.

**Страницы** (`pages/*/ui`) — чистая композиция: ни хуков, ни функций.
Статика страницы (крошки, заголовки) лежит в `pages/*/model`.
Компоненты в `ui/` вызывают максимум один хук из своей `model/` и дальше только рендерят.

## Generics

- `createStore<T>` — типизированное хранилище с localStorage (корзина, избранное, сравнение, пользователь, заказы).
- `CarouselTrack<T>` + `useCarousel` — карусель для любых элементов.
- `Select<T>`, `Tabs<T>` — выпадающий список и вкладки для любого значения.
- `TextField<T>`, `TextAreaField<T>`, `RadioGroupField<T, V>` — поля для react-hook-form,
  типизированы по `FieldValues` и `Path<T>`.

## react-hook-form

Формы входа (телефон → код из СМС), регистрации (ошибки как в макете), обратного звонка,
отзыва, оформления заказа (3 шага в одной форме), профиля и смены пароля.

## Маршруты

`/` · `/catalog` · `/catalog/:slug` (категория, `new`, `sale`, `hits`, `search`) · `/product/:id` ·
`/cart` · `/checkout` · `/favorites` · `/compare` · `/brands` · `/brands/:id` · `/news` · `/news/:id` ·
`/about` · `/privacy` · `/contacts` · `/account/orders` · `/account/profile` · `*` → 404 без шапки.

Фильтры, сортировка, вид (плитка/список) и страница каталога хранятся в URL.

## Анимации

Появление блоков при прокрутке (`Reveal`), появление страниц, модалок и выпадающих списков,
hover-подъём карточек, переключение кадров товара по движению мыши, «pop» счётчиков и иконок,
плавное раскрытие аккордеонов. Ключевые кадры описаны в `app/styles/index.css`.

## Про картинки

Фото товаров, логотипы брендов, баннеры и карта вырезаны из макетов — это временные ассеты.
Замените файлы в `src/shared/assets/` на оригиналы (имена и импорты в `assets/index.ts` менять не нужно).
Данные (товары, новости, заказы) — моки в `entities/*/model/data.ts`; «вход по СМС» принимает любой 4-значный код.
