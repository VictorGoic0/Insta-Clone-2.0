import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };

  signIn = e => {
    localStorage.setItem("user", this.state.user.username);
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOGVhODU0MjcyNDdkMDAyMTEyMjBmMCIsImlhdCI6MTU1Mjg1NTcwNiwiZXhwIjoxNTYxNDk1NzA2fQ.w0SHf9GxwzntBEfvdM0PusLz_H-4uGT7AqO_d3EM2t0"
    );
  };

  handleChanges = e => {
    console.log(this.state);

    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="login">
        <img src="/Images/iglogo.png" alt="Instagram" />
        <form onSubmit={this.signIn}>
          <input
            type="text"
            value={this.state.user.username}
            name="username"
            onChange={this.handleChanges}
            placeholder="Username"
          />
          <input
            type="password"
            value={this.state.user.password}
            name="password"
            onChange={this.handleChanges}
            placeholder="Password"
          />
          <button>Sign In</button>
        </form>
        <h3>Forgot Password?</h3>
      </div>
    );
  }
}

export default Login;
