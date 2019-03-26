import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import "./PostContainer.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      username: props.data.username,
      thumbnailUrl: props.data.thumbnailUrl,
      imageUrl: props.data.imageUrl,
      likes: props.data.likes,
      timestamp: props.data.timestamp,
      comments: props.data.comments
    };
  }

  likeIncrement = () => {
    this.setState({
      likes: (this.state.likes += 1)
    });
    console.log(this.state);
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getUTCDate();
    const all =
      seconds +
      minutes * 60 +
      hours * 60 * 60 +
      date * 24 * 60 * 60 +
      month * 30 * 24 * 60 * 60 +
      year * 365 * 24 * 60 * 60;
    const convertToTime = inputTime => {
      if (inputTime < 60) {
        return `${inputTime} seconds ago`;
      } else if (inputTime < 3600) {
        return `${Math.round(inputTime / 60)} minutes ago`;
      } else if (inputTime < 86400) {
        return `${Math.round(inputTime / 60 / 60)} hours ago`;
      } else if (inputTime < 2592000) {
        return `${Math.round(inputTime / 30 / 60 / 60)} days ago`;
      } else if (inputTime < 31104000) {
        return `${Math.round(inputTime / 12 / 30 / 60 / 60)} months ago`;
      } else if (inputTime < 311040000) {
        return `${Math.round(inputTime / 10 / 12 / 30 / 60 / 60)} years ago`;
      }
    };
  };

  render() {
    return (
      <div className="post">
        <div className="post-header">
          <img
            className="thumbnail"
            src={this.state.thumbnailUrl}
            alt="profile thumbnail"
          />
          <h2>{this.state.username}</h2>
        </div>
        <img className="post-img" src={this.state.imageUrl} alt="post" />
        <div className="post-footer">
          <img
            src="https://img.icons8.com/windows/32/000000/like.png"
            alt="heart"
            className="logo"
            onClick={this.likeIncrement}
          />
          <img
            src="https://img.icons8.com/windows/32/000000/speech-bubble.png"
            alt="comment"
            className="logo"
          />
          <h3>{this.state.likes} likes</h3>
          <CommentSection
            comments={this.state.comments}
            timestamp={this.state.timestamp}
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
