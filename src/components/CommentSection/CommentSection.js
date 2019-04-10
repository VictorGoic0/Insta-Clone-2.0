import React, { Component } from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import { connect } from "react-redux";
import { addComment, getComments } from "../../actions";
import PropTypes from "prop-types";

class CommentSection extends Component {
  state = {
    comment: {
      post_id: this.props.post_id,
      user_id: localStorage.getItem("userID"),
      text: ""
    }
  };

  handleChanges = e => {
    e.persist();
    this.setState(prevState => ({
      comment: {
        ...prevState.comment,
        text: e.target.value
      }
    }));
  };

  addNewComment = (e, comment) => {
    e.preventDefault();
    this.props
      .addComment(comment)
      .then(res => {
        this.setState(prevState => ({
          comment: {
            ...prevState.comment,
            text: ""
          }
        }));
      })
      .catch(err => {
        alert(`Comment failed to post ${err}. Please try again.`);
      });
  };

  render() {
    return (
      <div className="comments">
        {this.props.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        {this.props.pathID ? null : (
          <p
            className="showmore"
            onClick={() => this.props.getComments(this.props.post_id)}
          >
            Show More Comments
          </p>
        )}
        <p className="timestamp">10 minutes ago</p>
        <form onSubmit={e => this.addNewComment(e, this.state.comment)}>
          <input
            type="text"
            value={this.state.comment.text}
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

export default connect(
  null,
  { addComment, getComments }
)(CommentSection);
