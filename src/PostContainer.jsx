import PostForm from "./PostForm"
import Post from "./Post"
import { useContext } from "react";
import { CurrentUserContext } from "./contexts";

export default function PostContainer(props) {
  const { posts, searchedPosts, searchInput } = props;
  const [ currentUser ] = useContext(CurrentUserContext);
  console.log(currentUser, "<--- currentUser in PostContainer")

  
  return (
      <div className="post-container">
        <PostForm />
        {searchInput.length > 0
          ? searchedPosts.map((post) => (
              <Post post={post} key={post.id} likePost={props.likePost} />
            ))
          : posts.map((post) => (
              <Post
                post={post}
                key={post.id}
                likePost={props.likePost}
              />
            ))}
      </div>
    );
}