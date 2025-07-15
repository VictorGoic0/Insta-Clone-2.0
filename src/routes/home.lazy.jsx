import { createLazyFileRoute } from '@tanstack/react-router'
// import { useMutation } from '@tanstack/react-query'

export const Route = createLazyFileRoute('/home')({
  component: HomeRoute,
})

export default function HomeRoute () {
  return (
    <p>Hello World!</p>
  )
}
