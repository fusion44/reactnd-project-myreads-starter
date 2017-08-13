import React from "react";
// import * as BooksAPI from "../BooksAPI";
import "../App.css";
import SearchBar from "./SearchBar";

class SearchBooks extends React.Component {
  state = {};

  render() {
    return (
      <div className="search-books">
        <SearchBar closeSearch={this.props.closeSearch} />
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
