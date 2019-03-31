import React from "react";
import "./PostContainer.css";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends React.Component {
  state = {
    search: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.performSearch();
    }
  }

  handleChanges = e => {
    this.setState({
      search: e.target.value
    });
  };

  performSearch = () => {
    if (this.state.search.length > 0) {
      this.setState({
        filteredData: this.state.data.filter(input =>
          input.username.toLowerCase().includes(this.state.search.toLowerCase())
        )
      });
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          performSearch={this.performSearch}
          handleChanges={this.handleChanges}
          search={this.state.search}
        />
        <PostContainer />
      </div>
    );
  }
}

export default PostsPage;
