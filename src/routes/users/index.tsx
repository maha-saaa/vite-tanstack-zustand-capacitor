import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users')({
  component: () => <div>Hello /users!</div>
})