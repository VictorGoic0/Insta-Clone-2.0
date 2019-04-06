import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

const Comment = props => {
  const { thumbnailUrl, username, text } = props.comment;
  return (
    <div className="comment">
      {thumbnailUrl ? (
        <img src={thumbnailUrl} className="thumbnail" alt="profile thumbnail" />
      ) : null}
      <h4>{username}</h4>
      <p>{text}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;
