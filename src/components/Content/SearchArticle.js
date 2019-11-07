import React, { Component } from "react";
import queryString from "query-string";
import JSON from "../../db.json";
import Container from "../Layout/Container";
import BlogList from "./BlogList";
import ListContainer from "./ListContainer";

class SearchArticle extends Component {
  state = {
    blogs: JSON,
    filtered: []
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    const { title } = values;
    this.fetchData(title);
    console.log(this.props.location);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const values = queryString.parse(this.props.location.search);
      const { title } = values;
      this.fetchData(title);
    }
  }
  fetchData = title => {
    const { blogs } = this.state;
    let filteredData = blogs.filter(item => {
      return item.title.toLowerCase().indexOf(title.toLowerCase()) > -1;
    });
    this.setState({ filtered: filteredData });
  };

  render() {
    const { blogs, filtered } = this.state;
    return (
      <Container>
        <ListContainer>
          <BlogList list={filtered.length !== 0 ? filtered : blogs} />
        </ListContainer>
      </Container>
    );
  }
}

export default SearchArticle;
