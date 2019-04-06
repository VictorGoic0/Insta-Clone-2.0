import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

axios.interceptors.request.use(requestConfig => {
  const token = localStorage.getItem("token");
  requestConfig.headers.authorization = token;
  return requestConfig;
});

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.signedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = state => ({
  signedIn: state.signedIn
});

export default connect(
  mapStateToProps,
  {}
)(PrivateRoute);
