import React, { Component } from "react";
import "../CSS/CommentSection.css";
import Comment from "./Comment";
import { connect } from "react-redux";
import { addComment, getComments } from "../../actions";
import PropTypes from "prop-types";
import moment from "moment";

class CommentSection extends Component {
  state = {
    comment: {
      post_id: this.props.post_id,
      user_id: localStorage.getItem("userID"),
      text: ""
    },
    showMore: true
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

  getComments = id => {
    this.props.getComments(id);
    this.toggleShowMore();
  };

  toggleShowMore = () => {
    this.setState(prevState => ({
      ...prevState,
      showMore: !prevState.showMore
    }));
  };

  render() {
    const { comments, timestamp } = this.props;
    return (
      <div className="comments">
        {this.state.showMore &&
        comments.length > 4 &&
        this.props.path !== "/posts/:id"
          ? comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))
          : comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
        {this.props.showMore && this.state.showMore ? (
          <p
            className="showmore"
            onClick={() => this.getComments(this.props.post_id)}
          >
            Show More Comments
          </p>
        ) : null}
        <p className="timestamp">{moment(timestamp).fromNow()}</p>
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
