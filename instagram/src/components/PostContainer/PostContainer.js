import React from 'react';
import './PostContainer.css';
import Post from './Post';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.data.map((input, index) => <Post data={props.data[index]} key={props.data[index].timestamp} />)}
    </div>
  )
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.array.isRequired
    })
  )
}

export default PostContainer;
