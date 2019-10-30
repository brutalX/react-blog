import React, { Component, Fragment } from "react";
import Container from "../Layout/Container";
import JSON from "../../db.json";
import "./../../css/App.css";
class Article extends Component {
  state = {
    blogs: JSON
  };

  render() {
    const { blogs } = this.state;
    const { match } = this.props;

    let articleData = blogs
      .filter(item => item.id == match.params.id)
      .map(data => {
        return (
          <div key={data.id}>
            <h4>{data.title}</h4>
            <p>{data.feed}</p>
          </div>
        );
      });

    return <Container>{articleData}</Container>;
  }
}

export default Article;
