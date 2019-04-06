import React, { Component } from "react";
import "./PostContainer.css";
import SearchBar from "../SearchBar/SearchBar";
import { getPost, deletePost } from "../../actions";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import CommentSection from "../CommentSection/CommentSection";

class SingularPost extends Component {
  componentDidMount() {
    if (Number(this.props.match.params.id) !== this.props.post.id) {
      this.props.getPost(this.props.match.params.id);
    }
  }

  render() {
    const { fetchingPost, error } = this.props;
    const {
      thumbnailUrl,
      username,
      id,
      imageUrl,
      likes,
      comments
    } = this.props.post;
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
        <div className="singular-post-container">
          <div className="post">
            <div className="post-header">
              <img
                className="thumbnail"
                src={thumbnailUrl}
                alt="profile thumbnail"
              />
              <h2>{username}</h2>
            </div>
            <img className="post-img" src={imageUrl} alt="post" />
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
  { getPost, deletePost }
)(SingularPost);
