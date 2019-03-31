import React from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  state = {
    text: ""
  };

  handleChanges = e => {
    this.setState({
      text: e.target.value
    });
  };

  addNewComment = e => {
    e.preventDefault();
    return null;
  };

  render() {
    return (
      <div className="comments">
        {this.props.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <p className="timestamp">10 minutes ago</p>
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChanges}
            placeholder="Add a comment..."
            required
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default CommentSection;
