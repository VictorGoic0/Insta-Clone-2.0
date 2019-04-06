import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import PostsPage from "./components/PostContainer/PostsPage";
import SingularPost from "./components/PostContainer/SingularPost";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Authentication/PrivateRoute";

const App = () => {
  return (
    <>
      <PrivateRoute exact path="/" component={PostsPage} />
      <PrivateRoute path="/posts/:id" component={SingularPost} />
      <Route path="/login/" component={Login} />
    </>
  );
};

export default App;
