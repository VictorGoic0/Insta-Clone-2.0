import React from "react";
import { Link } from "react-router-dom";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
  const likePost = () => {
    const like = {
      user_id: Number(localStorage.getItem("userID")),
      post_id: id
    };
    props.likePost(like);
  };
  const timeStamp = time => {
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
  const {
    thumbnailUrl,
    username,
    id,
    imageUrl,
    likes,
    comments,
    showMore,
    createdAt
  } = props.post;
  const timestamp = timeStamp(createdAt);
  return (
    <div className="post">
      <div className="post-header">
        <img className="thumbnail" src={thumbnailUrl} alt="profile thumbnail" />
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
          onClick={likePost}
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
          showMore={showMore}
          timestamp={timestamp}
        />
      </div>
    </div>
  );
};

export default Post;
