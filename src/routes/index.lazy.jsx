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
  const [searchInput, setSearchInput] = useState("")
  const [posts, setPosts] = useState([])

  const setAllPosts = async () => {
    const allPosts = await getAllPosts()
    setPosts(allPosts)
  }
  
  useEffect(() => {
    setAllPosts()
  }, [])

  
  return (
    <ProtectedRoute>
      <SearchBar setSearchInput={setSearchInput} />
      <PostContainer searchInput={searchInput} posts={posts} />
    </ProtectedRoute>
  )
}
