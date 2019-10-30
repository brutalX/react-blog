import React, { Fragment } from "react";
import BlogsItem from "../Content/BlogsItem";
const BlogList = props => {
  const items = props.list.map(item => {
    return (
      <BlogsItem
        key={item.id}
        id={item.id}
        title={item.title}
        feed={item.feed}
      />
    );
  });
  return <Fragment>{items}</Fragment>;
};
export default BlogList;
