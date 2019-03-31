import React, { Component } from "react";
import "./PostContainer.css";
import Post from "./Post";
import { connect } from "react-redux";
import { getPosts } from "../../actions";
import PropTypes from "prop-types";

class PostContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, fetchingPosts } = this.props;

    if (fetchingPosts) {
      return <div className="loading">Loading...</div>;
    }
    return (
      <div className="post-container">
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  fetchingPosts: state.fetchingPosts,
  error: state.error
});

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.array.isRequired
    })
  )
};

export default connect(
  mapStateToProps,
  { getPosts }
)(PostContainer);
