// import { useState } from "react";
// import "./CSS/CommentSection.css";
// import Comment from "./Comment";
// import addComment from "./api/addComment"
// import getCommentsByPostId from "./api/getCommentsByPostId"

// export default function CommentSection(props) {
//   const { post_id, comments, currentUser } = props;
//   const userId = localStorage.getItem("userID")
//   const [showMore, setShowMore] = useState(true)

//   const addNewComment = (e, comment) => {

//   }

//   const getComments = (id) => {

//   }

//   return (
//       <div className="comments">
//         {comments.map((comment) => (
//               <Comment
//                 key={comment.id}
//                 comment={comment}
//                 currentUser={currentUser}
//               />
//             ))}
//         <form>
//           <input
//             type="text"
//             placeholder="Add a comment..."
//             required
//           />
//         </form>
//       </div>
//     );
// }