import React, { Component } from "react";
import { Route } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

import BookList from "./pages/BookList";
import BookSearch from "./pages/BookSearch";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    console.log("Chamando...");
    BooksAPI.getAll().then(books => {
      console.log("terminou,,", books);
      this.setState({
        books
      });
    });
  }

  render() {
    return (
      <div>
        <Route
          path="/"
          exact={true}
          render={() => <BookList books={this.state.books} />}
        />
        <Route path="/search" Component={BookSearch} />
        <Route path="*" component={BookList} />
      </div>
    );
  }
}

export default BooksApp;
