import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./PostContainer.css";

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="post-header">
          <img
            className="thumbnail"
            src={this.props.post.thumbnailUrl}
            alt="profile thumbnail"
          />
          <h2>{this.props.post.username}</h2>
        </div>
        <img className="post-img" src={this.props.post.imageUrl} alt="post" />
        <div className="post-footer">
          <img
            src="https://img.icons8.com/windows/32/000000/like.png"
            alt="heart"
            className="logo"
          />
          <img
            src="https://img.icons8.com/windows/32/000000/speech-bubble.png"
            alt="comment"
            className="logo"
          />
          <h3>{this.props.post.likes} likes</h3>
          <CommentSection
            post_id={this.props.post.id}
            comments={this.props.post.comments}
          />
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  })
};

export default Post;
