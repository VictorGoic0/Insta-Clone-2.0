import PostForm from "./PostForm"
import Post from "./Post"

export default function PostContainer(props) {
  const { posts, searchedPosts, searchInput, currentUser } = props;

  
  return (
      <div className="post-container">
        <PostForm />
        {searchInput.length > 0
          ? searchedPosts.map((post) => (
              <Post post={post} key={post.id} likePost={this.props.likePost} />
            ))
          : posts.map((post) => (
              <Post
                post={post}
                key={post.id}
                likePost={this.props.likePost}
                currentUser={currentUser}
              />
            ))}
      </div>
    );
}