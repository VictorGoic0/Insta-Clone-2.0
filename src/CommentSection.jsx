import { useContext, useState } from "react";
import "./CSS/CommentSection.css";
import Comment from "./Comment";
import { CurrentUserContext } from "./contexts";
// import addComment from "./api/addComment"
// import getCommentsByPostId from "./api/getCommentsByPostId"

export default function CommentSection(props) {
  const { post_id, comments, path } = props;
  const userId = localStorage.getItem("userID")
  const [showMore, setShowMore] = useState(true)
  const [comment, setComment] = useState("")
  const [ currentUser ] = useContext(CurrentUserContext);
  const postsPage = path && path.includes("posts")

  const addNewComment = (e, comment) => {
    console.log("add new comment")
  }

  const getComments = (id) => {
    console.log("get comments")
  }

  const handleChanges = e => {
    console.log(e, "<--- changes")
  }

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
            />
          ))
        : comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              currentUser={currentUser}
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
          value={comment}
          onChange={handleChanges}
          placeholder="Add a comment..."
          required
        />
      </form>
    </div>
    );
}