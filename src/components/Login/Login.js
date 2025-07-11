import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions";
import "../CSS/Login.css";

class Login extends Component {
  state = {
    user: {
      username: "",
      password: "",
    },
  };

  signIn = (e, userInfo) => {
    e.preventDefault();
    this.props
      .signIn(userInfo)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  handleChanges = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  switchLogin = (e) => {
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div className="login">
        <img src="/Images/iglogo.png" alt="Instagram" />
        <form onSubmit={(e) => this.signIn(e, this.state.user)}>
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
        <h3>
          Don't Have An Account? <span onClick={this.switchLogin}>Sign Up</span>
        </h3>
      </div>
    );
  }
}

export default connect(null, { signIn })(Login);
