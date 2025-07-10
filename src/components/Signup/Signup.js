import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions";
import "../CSS/Login.css";

class Signup extends Component {
  state = {
    user: {
      username: "",
      password: "",
    },
  };

  signUp = (e, userInfo) => {
    e.preventDefault();
    this.props
      .signUp(userInfo)
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
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="login">
        <img src="/Images/iglogo.png" alt="Instagram" />
        <form onSubmit={(e) => this.signUp(e, this.state.user)}>
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

export default connect(null, { signUp })(Signup);
