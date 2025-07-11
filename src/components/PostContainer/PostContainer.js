import React, { Component } from "react";
import Loader from "react-loader-spinner";
import Post from "./Post";
import PostForm from "./PostForm";
import { connect } from "react-redux";
import { getPosts } from "../../actions";
import { likePost } from "../../actions";
import PropTypes from "prop-types";

class PostContainer extends Component {
  componentDidMount() {
    if (this.props.posts.length < 1) {
      this.props.getPosts();
    }
  }

  render() {
    const { posts, fetchingPosts, searchedPosts, searchInput, currentUser } =
      this.props;

    if (fetchingPosts) {
      return (
        <div className="loading">
          <Loader type="Oval" color="#0a4e8a" height="120" width="80" />
        </div>
      );
    }
    return (
      <div className="post-container">
        <PostForm />
        {searchInput.length > 0
          ? searchedPosts.map((post) => (
              <Post post={post} key={post.id} likePost={this.props.likePost} />
            ))
          : posts.map((post) => (
              <Post
                post={post}
                key={post.id}
                likePost={this.props.likePost}
                currentUser={currentUser}
              />
            ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  searchedPosts: state.searchedPosts,
  searchInput: state.searchInput,
  fetchingPosts: state.fetchingPosts,
  currentUser: state.currentUser,
  error: state.error,
});

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.array.isRequired,
    })
  ),
};

export default connect(mapStateToProps, { getPosts, likePost })(PostContainer);
