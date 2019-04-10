import React, { Component } from "react";

class PostForm extends Component {
  state = {
    open: false,
    post: {
      description: "",
      imageUrl: ""
    }
  };

  openForm = () => {
    this.setState(prevState => ({
      ...prevState,
      open: !prevState.open
    }));
  };

  render() {
    const { open, post } = this.state;
    return (
      <div className="postform">
        <form>
          {open ? (
            <>
              <textarea
                className="addpost area"
                placeholder="What's on your mind?"
                value={post.description}
              />
              <input placeholder="Image URL here" value={post.imageUrl} />
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

export default PostForm;
