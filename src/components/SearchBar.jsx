import React from "react";
import "../App.css";

class SearchBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="search-books-bar">
        <a className="close-search" onClick={this.props.closeSearch}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
