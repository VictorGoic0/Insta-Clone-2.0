import { Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import CommentSection from "./CommentSection"
import { useContext, useState } from "react";
import { CurrentUserContext } from "./contexts";

export default function Post(props) {
  const {
    thumbnailUrl,
    username,
    id,
    imageUrl,
    likes,
    comments,
    showMore
  } = props.post;
  const [ postComments, setPostComments ] = useState(comments)
  const [ currentUser ] = useContext(CurrentUserContext);

  const likePost = () => {
    // const like = {
    //   user_id: Number(localStorage.getItem("userID")),
    //   post_id: id,
    // };
    // props.likePost(like);
  };

  const addCommentToPost = (comment) => {
    setPostComments((previousCommentsState) => {
      return [...previousCommentsState, comment]
    })
  }

  const addShowMoreCommentsToPost = (newComments) => {
    setPostComments(newComments)
  }


  return (
    <div className="post">
      <div className="post-header">
        <img className="thumbnail" src={thumbnailUrl} alt="profile thumbnail" />
        <h2>{username}</h2>
        {currentUser && currentUser.username === username ? (
          <Trash2 size={18} color="#000" />
        ) : null}
      </div>
      <Link to={`/posts/${id}`}>
        <img className="post-img" src={imageUrl} alt="post" />
      </Link>
      <div className="post-footer">
        <img
          src="https://img.icons8.com/windows/32/000000/like.png"
          alt="heart"
          className="logo"
          onClick={likePost}
        />
        <img
          src="https://img.icons8.com/windows/32/000000/speech-bubble.png"
          alt="comment"
          className="logo"
        />
        <h3>{likes} likes</h3>
        <CommentSection
          post_id={id}
          comments={postComments}
          showMore={showMore}
          addCommentToPost={addCommentToPost}
          addShowMoreCommentsToPost={addShowMoreCommentsToPost}
        />
      </div>
    </div>
  );
}