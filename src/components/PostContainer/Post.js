import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommentSection from "../CommentSection/CommentSection";

class Post extends Component {
  render() {
    const {
      thumbnailUrl,
      username,
      id,
      imageUrl,
      likes,
      comments
    } = this.props.post;
    return (
      <div className="post">
        <div className="post-header">
          <img
            className="thumbnail"
            src={thumbnailUrl}
            alt="profile thumbnail"
          />
          <h2>{username}</h2>
        </div>
        <Link to={`/posts/${id}`}>
          <img className="post-img" src={imageUrl} alt="post" />
        </Link>
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
          <h3>{likes} likes</h3>
          <CommentSection post_id={id} comments={comments} />
        </div>
      </div>
    );
  }
}

export default Post;
