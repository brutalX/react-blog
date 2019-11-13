import React, { Component } from "react";
import JSON from "../../db.json";
import { Link, withRouter, Redirect } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.blogs = JSON;
    this.state = {
      suggestions: [],
      search_data: ""
    };
  }

  handleChange = e => {
    const value = e.target.value;
    let filtered = [];
    const blog = this.blogs.map(blogdata => blogdata.tags);

    if (value.length > 0) {
      filtered = blog.filter(item => {
        return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });
    }

    this.setState(() => ({ suggestions: filtered }));
  };

  handleSuggestion() {
    const { suggestions } = this.state;
    let fetchSuggestions = suggestions.map(item => item);
    const uniqueFilter = [...new Set(fetchSuggestions)];
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {uniqueFilter.map((item, idx) => (
          <li className="list-style" key={idx}>
            <Link to={`/search/?title=${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    );
  }
  keyPressed = event => {
    if (event.key === "Enter") {
      let eventData = event.target.value;
      if (eventData !== "") {
        this.setState(() => ({ search_data: eventData }));
      } else {
        return console.log("error");
      }
    }
  };

  render() {
    const { search_data } = this.state;
    const location = {
      pathname: "/search",
      search: "?title=" + search_data
    };
    const SearchTopic = location => (
      <Redirect
        to={{
          ...location,
          pathname: "/search",
          search: "?title=" + search_data
        }}
      />
    );

    return (
      <div className="searchBar">
        <input
          className="searchBar"
          onChange={this.handleChange}
          onKeyPress={this.keyPressed}
          placeholder="Search"
          type="textbox"
        />
        {this.handleSuggestion()}
        {search_data.length !== 0 && SearchTopic(location)}
      </div>
    );
  }
}
export default withRouter(SearchBar);
