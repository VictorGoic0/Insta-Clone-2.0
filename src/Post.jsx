import { Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import CommentSection from "./CommentSection"
import { useContext, useState } from "react";
import { CurrentUserContext } from "./contexts";
import likePost from "./api/likePost";

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
  const [ likesCount, setLikesCount ] = useState(Number(likes))
  const [ postComments, setPostComments ] = useState(comments)
  const [ currentUser ] = useContext(CurrentUserContext);

  const onClickLikePost = async () => {
    const like = {
      user_id: currentUser.userID,
      post_id: id,
    }
    try {
      const response = await likePost(like)
      if (response) {
        const isLiked = response.liked
        setLikesCount((previousLikesCount) => isLiked ? previousLikesCount + 1 : previousLikesCount - 1)
      }
    } catch (error) {
      console.error(error)
    }
  };

  const addCommentToPost = (comment) => {
    setPostComments((previousCommentsState) => {
      return [...previousCommentsState, comment]
    })
  }

  const removeCommentFromPost = (commentId) => {
    setPostComments((previousCommentsState) => previousCommentsState.filter((comment) => comment.id !== commentId))
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
          <Trash2 className="trash-icon" size={18} color="#000" />
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
          onClick={onClickLikePost}
        />
        <img
          src="https://img.icons8.com/windows/32/000000/speech-bubble.png"
          alt="comment"
          className="logo"
        />
        <h3>{likesCount} likes</h3>
        <CommentSection
          post_id={id}
          comments={postComments}
          showMore={showMore}
          addCommentToPost={addCommentToPost}
          removeCommentFromPost={removeCommentFromPost}
          addShowMoreCommentsToPost={addShowMoreCommentsToPost}
        />
      </div>
    </div>
  );
}