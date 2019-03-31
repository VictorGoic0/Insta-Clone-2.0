import React from "react";
import "./PostContainer.css";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

const PostsPage = () => {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer />
    </div>
  );
};

export default PostsPage;
