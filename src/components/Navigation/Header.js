import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const webdata = {
  title: "BlogMoto",
  create_date: "09-23-19"
};
const Title = webdata => {
  return webdata.title;
};

const Header = () => {
  return (
    <div className="nav nav-bg">
      <div className="title">
        <h4 className="title-style">
          <Link to={"/"}>{Title(webdata)}</Link>
        </h4>
      </div>

      <div className="search">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
