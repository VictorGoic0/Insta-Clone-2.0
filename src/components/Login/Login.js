import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions";
import "./Login.css";

class Login extends Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };

  signIn = e => {
    e.preventDefault();
    this.props.signIn(this.state.user);
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

export default connect(
  null,
  { signIn }
)(Login);
