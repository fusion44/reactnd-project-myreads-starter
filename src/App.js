import React from "react";
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks.jsx";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks />} />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
