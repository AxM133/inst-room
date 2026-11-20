import { createBrowserRouter, Navigate } from 'react-router'
import { ROUTE_PATTERNS, ROUTES } from '@/shared/config'
import { AboutPage } from '@/pages/about'
import { AccountOrdersPage } from '@/pages/account-orders'
import { AccountProfilePage } from '@/pages/account-profile'
import { BrandDetailPage } from '@/pages/brand-detail'
import { BrandsPage } from '@/pages/brands'
import { CartPage } from '@/pages/cart'
import { CatalogPage } from '@/pages/catalog'
import { CategoryPage } from '@/pages/category'
import { CheckoutPage } from '@/pages/checkout'
import { ComparePage } from '@/pages/compare'
import { ContactsPage } from '@/pages/contacts'
import { FavoritesPage } from '@/pages/favorites'
import { HomePage } from '@/pages/home'
import { NewsPage } from '@/pages/news'
import { NewsDetailPage } from '@/pages/news-detail'
import { NotFoundPage } from '@/pages/not-found'
import { PrivacyPage } from '@/pages/privacy'
import { ProductPage } from '@/pages/product'
import { MainLayout } from '../../layouts'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTE_PATTERNS.home, element: <HomePage /> },
      { path: ROUTE_PATTERNS.catalog, element: <CatalogPage /> },
      { path: ROUTE_PATTERNS.category, element: <CategoryPage /> },
      { path: ROUTE_PATTERNS.product, element: <ProductPage /> },
      { path: ROUTE_PATTERNS.cart, element: <CartPage /> },
      { path: ROUTE_PATTERNS.checkout, element: <CheckoutPage /> },
      { path: ROUTE_PATTERNS.favorites, element: <FavoritesPage /> },
      { path: ROUTE_PATTERNS.compare, element: <ComparePage /> },
      { path: ROUTE_PATTERNS.brands, element: <BrandsPage /> },
      { path: ROUTE_PATTERNS.brand, element: <BrandDetailPage /> },
      { path: ROUTE_PATTERNS.news, element: <NewsPage /> },
      { path: ROUTE_PATTERNS.newsItem, element: <NewsDetailPage /> },
      { path: ROUTE_PATTERNS.about, element: <AboutPage /> },
      { path: ROUTE_PATTERNS.privacy, element: <PrivacyPage /> },
      { path: ROUTE_PATTERNS.contacts, element: <ContactsPage /> },
      { path: ROUTE_PATTERNS.account, element: <Navigate to={ROUTES.accountOrders} replace /> },
      { path: ROUTE_PATTERNS.accountOrders, element: <AccountOrdersPage /> },
      { path: ROUTE_PATTERNS.accountProfile, element: <AccountProfilePage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
