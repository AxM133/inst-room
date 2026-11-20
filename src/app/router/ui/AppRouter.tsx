import { RouterProvider } from 'react-router/dom'
import { router } from '../model/routes'

export function AppRouter() {
  return <RouterProvider router={router} />
}
