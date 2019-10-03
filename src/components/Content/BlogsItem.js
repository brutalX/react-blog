import React from "react";
import Cards from "./Cards";

const BlogsItem = props => {
  const { title, feed } = props;
  return (
    <Cards>
      <h3>{title}</h3>
      <div>{feed}</div>
    </Cards>
  );
};
export default BlogsItem;
