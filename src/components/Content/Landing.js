import React, { Component, Fragment } from "react";
import JSON from "../../db.json";
import BlogList from "./BlogList";
import Container from "../Layout/Container";
import ListContainer from "./ListContainer";
class Landing extends Component {
  state = {
    blogs: JSON
  };

  render() {
    const { blogs } = this.state;
    return (
      <Container>
        <ListContainer>
          <BlogList list={blogs} />
        </ListContainer>
      </Container>
    );
  }
}
export default Landing;
