import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import PostsPage from "./components/PostContainer/PostsPage";
import SingularPost from "./components/PostContainer/SingularPost";
import authenticate from "./components/Authentication/authenticate";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={PostsPage} />
        <Route path="/posts/:id" component={SingularPost} />
      </div>
    );
  }
}

export default authenticate(App)(Login);
