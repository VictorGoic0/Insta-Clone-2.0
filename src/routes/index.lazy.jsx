import { createLazyFileRoute } from '@tanstack/react-router'
import { ProtectedRoute } from '../ProtectedRoute'
import SearchBar from '../SearchBar'
import PostContainer from '../PostContainer'
import { useState, useEffect } from 'react'
import getAllPosts from "../api/getAllPosts"

export const Route = createLazyFileRoute('/')({
  component: PostsFeed,
})

export default function PostsFeed () {
  // TODO: add search input state here
  // TODO: add GET posts state here
  const [searchInput, setSearchInput] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(async () => {
    const allPosts = await getAllPosts()
    setPosts(allPosts)
  }, [])

  
  return (
    <ProtectedRoute>
      <SearchBar />
      <PostContainer searchInput={searchInput} posts={posts} />
    </ProtectedRoute>
  )
}
