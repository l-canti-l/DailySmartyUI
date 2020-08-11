import React, { Component } from "react";

import Logo from "./logo";
import Searchbar from "./searchbar";
import RecentPosts from "./recent-posts";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Logo />
        <Searchbar />
        <RecentPosts />
      </div>
    );
  }
}
