import React, { Component } from "react";
import { Route } from "react-router-dom";

// import * as BooksAPI from './BooksAPI'
import "./App.css";

import BookList from "./pages/BookList";
import BookSearch from "./pages/BookSearch";

class BooksApp extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact={true} Component={BookList} />
        <Route path="/search" Component={BookSearch} />
        <Route path="*" component={BookList} />
      </div>
    );
  }
}

export default BooksApp;
