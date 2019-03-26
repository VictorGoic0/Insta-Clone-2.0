import React from "react";
import "./PostContainer.css";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
      search: ""
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.performSearch();
      console.log(this.state);
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
        {this.state.search.length === 0 ? (
          <PostContainer data={this.state.data} />
        ) : (
          <PostContainer data={this.state.filteredData} />
        )}
      </div>
    );
  }
}

export default PostsPage;
