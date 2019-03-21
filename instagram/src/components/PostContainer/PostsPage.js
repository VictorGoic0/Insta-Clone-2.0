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
      search: ""
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
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
    const filteredData = this.state.data.filter(input =>
      input.username.toLowerCase().includes(this.state.search.toLowerCase())
    );

    if (this.state.search.length === 0) {
      this.setState({
        data: dummyData
      });
    } else {
      this.setState({
        data: filteredData
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
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default PostsPage;
