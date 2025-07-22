import { createLazyFileRoute } from '@tanstack/react-router'
import { ProtectedRoute } from '../ProtectedRoute'

export const Route = createLazyFileRoute('/')({
  component: HomeRoute,
})

export default function HomeRoute () {
  return (
    <ProtectedRoute>
      <p>Hello World!</p>
    </ProtectedRoute>
  )
}
