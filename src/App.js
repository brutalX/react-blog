import React, { Component, Fragment } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Navigation/Header";

import Landing from "./components/Content/Landing";
import Article from "./components/Content/Article";
import SearchArticle from "./components/Content/SearchArticle";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Header keyword={this.getKeyword} />
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/article/:id" component={Article} />
              <Route path="/search" component={SearchArticle} />
            </Switch>
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
