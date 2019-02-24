import React from 'react';
import './CommentSection.css';
import Comment from './Comment'
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      comments: props.comments,
      timestamp: props.timestamp,
      text: ''
    }
  }

  handleChanges = e => {
    console.log(this.state)
    this.setState({
      text: e.target.value
    })
  }

  addNewComment = (e, i) => {
    e.preventDefault();

    const newComment = {
      username: "commenting_specialist",
      text: this.state.text
    }
    this.setState({
      comments: [...this.state.comments, newComment],
      timestamp: this.state.timestamp
    })
  }

  render() {
    return (
      <div className="comments">
        {this.state.comments.map((input, index) => <Comment key={index} info={input} />)}
        <p className="timestamp">{this.state.timestamp}</p>
        <form onSubmit={this.addNewComment}>
          <input
          type="text"
          value={this.state.text}
          onChange={this.handleChanges}
          placeholder="Add a comment...">
          </input>
        </form>
      </div>
    )
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

export default CommentSection;
