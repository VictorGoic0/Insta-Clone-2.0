import { useContext, useState } from "react";
import "./CSS/CommentSection.css";
import Comment from "./Comment";
import { CurrentUserContext } from "./contexts";
import addComment from "./api/addComment"
import getCommentsByPostId from "./api/getCommentsByPostId"
import deleteComment from "./api/deleteComment";

export default function CommentSection(props) {
  const { post_id, comments, path } = props;
  const [showMore, setShowMore] = useState(true)
  const [comment, setComment] = useState("")
  const [ currentUser ] = useContext(CurrentUserContext);
  const postsPage = path && path.includes("posts")

  const addNewComment = async (e, text) => {
    e.preventDefault();
    const newComment = {
      post_id,
      user_id: currentUser.userID,
      text
    }
    try {
      const response = await addComment(newComment)
      if (response) {
        props.addCommentToPost(response)
        setComment("")
      }
    } catch (error) {
      console.error(e)
      alert(`Comment failed to post ${error}. Please try again.`);
    }
    
  }

  const onClickDeleteComment = async (e, commentId, postId) => {
    e.preventDefault();
    try {
      const response = await deleteComment(commentId, postId);
      if (response) {
        props.removeCommentFromPost(commentId)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const getComments = async (id) => {
    try {
      const response = await getCommentsByPostId(id)
      props.addShowMoreCommentsToPost(response)
      toggleShowMore()
    } catch (error) {
      console.error(error, "Error fetching comments")
    }
  }

  const toggleShowMore = () => {
    setShowMore(prevState => !prevState)
  };

  return (
    <div className="comments">
      {showMore &&
      comments.length > 4 &&
      !postsPage
        ? comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              currentUser={currentUser}
              post_id={post_id}
              deleteComment={onClickDeleteComment}
            />
          ))
        : comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              currentUser={currentUser}
              post_id={post_id}
              deleteComment={onClickDeleteComment}
            />
          ))}
      {props.showMore && showMore ? (
        <p
          className="showmore"
          onClick={() => getComments(post_id)}
        >
          Show More Comments
        </p>
      ) : null}
      <form onSubmit={(e) => addNewComment(e, comment)}>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          required
        />
      </form>
    </div>
    );
}