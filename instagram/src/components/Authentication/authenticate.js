import React from "react";

const authenticate = FirstComponent => SecondComponent => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("token")) {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <FirstComponent />;
      } else {
        return <SecondComponent />;
      }
    }
  };
};

export default authenticate;
