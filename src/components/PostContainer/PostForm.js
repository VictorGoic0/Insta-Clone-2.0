import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions";

class PostForm extends Component {
  state = {
    open: false,
    post: {
      description: "",
      imageUrl: "",
      user_id: localStorage.getItem("userID")
    }
  };

  openForm = () => {
    this.setState(prevState => ({
      ...prevState,
      open: !prevState.open
    }));
  };

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      post: {
        ...prevState.post,
        [e.target.name]: e.target.value
      }
    }));
  };

  createPost = (e, postInfo) => {
    e.preventDefault();
    this.props.addPost(postInfo);
    this.setState(prevState => ({
      ...prevState,
      post: {
        description: "",
        imageUrl: "",
        user_id: prevState.post.user_id
      }
    }));
  };

  render() {
    const { open, post } = this.state;
    return (
      <div className="postform">
        <form onSubmit={e => this.createPost(e, this.state.post)}>
          {open ? (
            <>
              <textarea
                className="addpost area"
                placeholder="What's on your mind?"
                onChange={this.changeHandler}
                value={post.description}
                name="description"
              />
              <input
                placeholder="Image URL here"
                onChange={this.changeHandler}
                value={post.imageUrl}
                name="imageUrl"
              />
              <button type="submit">Add Post</button>
            </>
          ) : (
            <input
              className="addpost"
              placeholder="Add a new post..."
              onClick={this.openForm}
            />
          )}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addPost }
)(PostForm);
