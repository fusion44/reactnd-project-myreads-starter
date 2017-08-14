import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "react-search-input";
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
          <SearchInput
            placeholder="Search by title or author"
            className="search-input"
            onChange={val => this.props.onQueryChange(val)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
