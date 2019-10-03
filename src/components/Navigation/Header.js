import React from "react";
import SearchBar from "./SearchBar";

const webdata = {
  title: "BlogMoto",
  create_date: "09-23-19"
};
const Title = webdata => {
  return webdata.title;
};

const Header = props => {
  return (
    <div className="nav nav-bg">
      <div className="title">
        <h4 className="title-style">{Title(webdata)}</h4>
      </div>

      <div className="search">
        <SearchBar passkey={props.keyword} />
      </div>
    </div>
  );
};

export default Header;
