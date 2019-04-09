import React, { Component } from "react";
import "./SearchBar.css";
import { connect } from "react-redux";
import { searchBar } from "../../actions";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = {
    searched: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searched !== this.state.searched) {
      this.props.searchBar(this.state.searched);
    }
  }

  searchHandler = e => {
    e.preventDefault();
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  searchSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="searchbar">
        <div className="searchbarimg">
          <img src="/images/igcameralogo.png" alt="igcamera" />
          <Link to="/">
            <img src="/images/iglogo.png" alt="iglogo" />
          </Link>
        </div>
        <form onSubmit={this.searchSubmit}>
          <input
            name="searched"
            value={this.state.searched}
            onChange={this.searchHandler}
            placeholder="Search..."
          />
        </form>
        <div className="searchbarlogos">
          <img src="/images/compass.svg" alt="compass" />
          <img src="/images/searcheart.png" alt="heart" />
          <img src="/images/profile.svg" className="profile" alt="profile" />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { searchBar }
)(SearchBar);
