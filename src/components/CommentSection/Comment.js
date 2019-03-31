import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div className="comment">
      <h4>{props.comment.username}</h4>
      <p>{props.comment.text}</p>
    </div>
  );
};

Comment.propTypes = {
  info: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;
