import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signUp } from "../../actions";
import "./Login.css";

class Login extends Component {
  state = {
    user: {
      username: "",
      password: ""
    },
    logIn: true
  };

  signIn = (e, userInfo) => {
    e.preventDefault();
    this.props
      .signIn(userInfo)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        alert(err);
      });
  };

  signUp = (e, userInfo) => {
    e.preventDefault();
    this.props
      .signUp(userInfo)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        alert(err);
      });
  };

  handleChanges = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  switchLogin = e => {
    e.persist();
    this.setState(prevState => ({ logIn: !prevState.logIn }));
  };

  render() {
    if (this.state.logIn) {
      return (
        <div className="login">
          <img src="/Images/iglogo.png" alt="Instagram" />
          <form onSubmit={e => this.signIn(e, this.state.user)}>
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
            Don't Have An Account?{" "}
            <span onClick={this.switchLogin}>Sign Up</span>
          </h3>
        </div>
      );
    } else {
      return (
        <div className="login">
          <img src="/Images/iglogo.png" alt="Instagram" />
          <form onSubmit={e => this.signUp(e, this.state.user)}>
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
            <button>Sign Up</button>
          </form>
          <h3>
            Already Have An Account?{" "}
            <span onClick={this.switchLogin}>Sign In</span>
          </h3>
        </div>
      );
    }
  }
}

export default connect(
  null,
  { signIn, signUp }
)(Login);
