import React, { Component } from "react";
import JSON from "../../db.json";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.blogs = JSON;
    this.state = {
      suggestions: []
    };
  }
  handleChange = e => {
    const value = e.target.value;
    let filtered = [];
    const blog = this.blogs.map(blogdata => blogdata.title);

    if (value.length > 0) {
      filtered = blog.filter(item => {
        return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });
    }

    this.setState(() => ({ suggestions: filtered }));
  };

  handleSuggestion() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div className="searchBar">
        <input
          className="searchBar"
          onChange={this.handleChange}
          placeholder="Search"
          type="textbox"
        />
        {this.handleSuggestion()}
      </div>
    );
  }
}
export default SearchBar;
