import React, { Component } from "react";
import "./css/App.css";
import JSON from "./db.json";

import Header from "./components/Navigation/Header";
import BlogList from "./components/Content/BlogList";

class App extends Component {
  state = {
    blogs: JSON,
    filtered: []
  };

  getKeyword = event => {
    const { blogs } = this.state;
    let data = event.target.value;
    let filteredData = blogs.filter(item => {
      return item.title.toLowerCase().indexOf(data.toLowerCase()) > -1;
    });
    this.setState({ filtered: filteredData });
  };

  render() {
    const { filtered, blogs } = this.state;
    return (
      <div className="App">
        <div>
          <Header keyword={this.getKeyword} />
        </div>
        <div className="list-container">
          <BlogList list={filtered.length !== 0 ? filtered : blogs} />
        </div>
      </div>
    );
  }
}

export default App;
