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
  }

  fetchData = title => {
    const { blogs } = this.state;
    let filteredData = blogs.filter(item => {
      return item.title.toLowerCase().indexOf(title.toLowerCase()) > -1;
    });
    this.setState({ filtered: filteredData });
  };

  // getKeyword = (event, values) => {
  //   const { blogs } = this.state;

  //   console.log("this is the " + values);
  //   let data = event.target.value;
  //   let filteredData = blogs.filter(item => {
  //     return item.title.toLowerCase().indexOf(values.title.toLowerCase()) > -1;
  //   });
  //   this.setState({ filtered: filteredData });
  // };
  render() {
    return (
      <Container>
        <ListContainer>
          <BlogList
            list={
              this.state.filtered.length !== 0
                ? this.state.filtered
                : this.state.blogs
            }
          />
        </ListContainer>
      </Container>
    );
  }
}

export default SearchArticle;
