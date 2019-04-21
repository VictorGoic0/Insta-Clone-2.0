import React, { Component } from "react";
import "../CSS/PostContainer.css";
import SearchBar from "../SearchBar/SearchBar";
import { getPost, deletePost, likePost } from "../../actions";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import CommentSection from "../CommentSection/CommentSection";

class PostPage extends Component {
  componentDidMount() {
    if (Number(this.props.match.params.id) !== this.props.post.id) {
      this.props.getPost(this.props.match.params.id);
    }
  }
  likePost = () => {
    const like = {
      user_id: localStorage.getItem("userID"),
      post_id: Number(this.props.match.params.id)
    };
    this.props.likePost(like);
  };
  timeStamp = time => {
    const date = new Date(Date.parse(time));
    const diff = (new Date().getTime() - date.getTime()) / 1000;
    const day_diff = Math.floor(diff / 86400);

    if (diff < 60) {
      return "just now";
    } else if (diff < 120) {
      return "1 minute ago";
    } else if (diff < 3600) {
      return `${Math.floor(diff / 60)} minutes ago`;
    } else if (diff < 7200) {
      return "1 hour ago";
    } else if (diff < 86400) {
      return `${Math.floor(diff / 3600)} hours ago`;
    } else if (day_diff === 1) {
      return "Yesterday";
    } else if (day_diff < 7) {
      return `${day_diff} days ago`;
    } else if (day_diff === 7) {
      return "1 week ago";
    } else if (day_diff < 31) {
      return `${Math.ceil(day_diff / 7)} weeks ago`;
    }
  };

  render() {
    const { fetchingPost, error } = this.props;
    const {
      thumbnailUrl,
      username,
      id,
      imageUrl,
      likes,
      comments,
      createdAt
    } = this.props.post;
    const timestamp = this.timeStamp(createdAt);
    if (fetchingPost || id === undefined) {
      return (
        <>
          <SearchBar />
          <div className="loading">
            <Loader type="Oval" color="#0a4e8a" height="120" width="80" />
          </div>
        </>
      );
    }
    return (
      <>
        <SearchBar />
        <div className="post-page-container">
          <div className="post-image">
            <img src={imageUrl} alt="post" />
          </div>
          <div className="post">
            <div className="post-header">
              <img
                className="thumbnail"
                src={thumbnailUrl}
                alt="profile thumbnail"
              />
              <h2>{username}</h2>
            </div>
            {this.props.post.description ? (
              <p className="description">{this.props.post.description}</p>
            ) : null}
            <div className="post-footer">
              <img
                src="https://img.icons8.com/windows/32/000000/like.png"
                alt="heart"
                className="logo"
                onClick={this.likePost}
              />
              <img
                src="https://img.icons8.com/windows/32/000000/speech-bubble.png"
                alt="comment"
                className="logo"
              />
              <h3>{likes} likes</h3>
              <CommentSection
                post_id={id}
                comments={comments}
                path={this.props.match.path}
                timestamp={timestamp}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  fetchingPost: state.fetchingPost,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getPost, deletePost, likePost }
)(PostPage);
