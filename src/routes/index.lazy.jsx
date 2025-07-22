import { createLazyFileRoute } from '@tanstack/react-router'
import { ProtectedRoute } from '../ProtectedRoute'
import SearchBar from '../SearchBar'
import PostContainer from '../PostContainer'
import { useState } from 'react'

export const Route = createLazyFileRoute('/')({
  component: PostsFeed,
})

export default function PostsFeed () {
  // TODO: add search input state here
  const [searchInput, setSearchInput] = useState("")

  
  // TODO: add GET posts state here
  return (
    <ProtectedRoute>
      <SearchBar />
      <PostContainer searchInput={searchInput} />
    </ProtectedRoute>
  )
}
