import { useContext, useState } from "react";
import "./CSS/CommentSection.css";
import Comment from "./Comment";
import addComment from "./api/addComment"
import getCommentsByPostId from "./api/getCommentsByPostId"
import { CurrentUserContext } from "./contexts";

export default function CommentSection(props) {
  const { post_id, comments } = props;
  const userId = localStorage.getItem("userID")
  const [showMore, setShowMore] = useState(true)
  const [ currentUser ] = useContext(CurrentUserContext);
  console.log(currentUser, "<--- currentUser in CommentSection")

  const addNewComment = (e, comment) => {
    console.log("add new comment")
  }

  const getComments = (id) => {
    console.log("get comments")
  }

  return (
      <div className="comments">
        {comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                currentUser={currentUser}
              />
            ))}
        <form>
          <input
            type="text"
            placeholder="Add a comment..."
            required
          />
        </form>
      </div>
    );
}