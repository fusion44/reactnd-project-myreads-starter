import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class SearchBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
