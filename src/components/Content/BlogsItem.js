import React from "react";
import Cards from "./Cards";

import { Link } from "react-router-dom";
const BlogsItem = props => {
  const { id, title, feed } = props;

  return (
    <Cards>
      <Link to={`/article/${id}`}>{title}</Link>
      <div>{feed}</div>
    </Cards>
  );
};

export default BlogsItem;
