import React from "react";
import PropTypes from "prop-types";
import { Trash2 } from "lucide-react";

const Comment = (props) => {
  const { thumbnailUrl, username, text } = props.comment;
  const { currentUser } = props;
  return (
    <div className="comment">
      <img src={thumbnailUrl} className="thumbnail" alt="profile thumbnail" />
      <h4>{username}</h4>
      <p>{text}</p>
      {/* {currentUser && currentUser.username === username ? (
        <Trash2 size={14} color="#000" />
      ) : null} */}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default Comment;
