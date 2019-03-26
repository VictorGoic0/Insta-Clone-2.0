import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userText: "",
      passText: ""
    };
  }

  signIn = e => {
    localStorage.setItem("user", this.state.userText);
    localStorage.setItem("password", this.state.passText);
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOGVhODU0MjcyNDdkMDAyMTEyMjBmMCIsImlhdCI6MTU1Mjg1NTcwNiwiZXhwIjoxNTYxNDk1NzA2fQ.w0SHf9GxwzntBEfvdM0PusLz_H-4uGT7AqO_d3EM2t0"
    );
  };

  handleChanges = e => {
    console.log(this.state);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="login">
        <img src="/Images/iglogo.png" alt="Instagram" />
        <form onSubmit={this.signIn}>
          <input
            type="text"
            value={this.state.userText}
            name="userText"
            onChange={this.handleChanges}
            placeholder="Username"
          />
          <input
            type="text"
            value={this.state.passText}
            name="passText"
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
