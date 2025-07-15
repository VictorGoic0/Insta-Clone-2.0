import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: HomeRoute,
})

export default function HomeRoute () {
  return (
    <p>Hello World!</p>
  )
}
