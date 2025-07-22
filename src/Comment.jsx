import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { CurrentUserContext } from "./contexts";

export default function Comment(props) {
  const { thumbnailUrl, username, text } = props.comment;
  const [ currentUser ] = useContext(CurrentUserContext);
  console.log(currentUser, "<--- currentUser in Comment")

  return (
    <div className="comment">
      <img src={thumbnailUrl} className="thumbnail" alt="profile thumbnail" />
      <h4>{username}</h4>
      <p>{text}</p>
      {currentUser && currentUser.username === username ? (
        <Trash2 size={14} color="#000" />
      ) : null}
    </div>
  );
}