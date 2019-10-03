import React, { Fragment } from "react";

const SearchBar = props => {
  return (
    <Fragment>
      <input
        onChange={props.passkey}
        placeholder="Search"
        className="inputSearch"
        type="textbox"
      />
    </Fragment>
  );
};
export default SearchBar;
