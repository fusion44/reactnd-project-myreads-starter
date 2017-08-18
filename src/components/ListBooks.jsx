import React from "react";
import "../App.css";
import Bookshelf from "./Bookshelf";
import TitleBar from "./TitleBar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ListBooks extends React.Component {
  state = {};

  render() {
    return (
      <div className="list-books">
        <TitleBar title="MyReads" />
        <div className="list-books-content">
          <Bookshelf
            title="Currently Reading"
            books={this.props.books.filter(
              book => (book.shelf === "currentlyReading" ? book : undefined),
            )}
            update={this.props.update}
          />
          <Bookshelf
            title="Want to Read"
            books={this.props.books.filter(
              book => (book.shelf === "wantToRead" ? book : undefined),
            )}
            update={this.props.update}
          />
          <Bookshelf
            title="Read"
            books={this.props.books.filter(
              book => (book.shelf === "read" ? book : undefined),
            )}
            update={this.props.update}
          />
        </div>
        <div className="open-search">
          <Link
            to="/search"
            onClick={() => this.setState({ showSearchPage: true })}
          >
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

ListBooks.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      shelf: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  update: PropTypes.func.isRequired,
};

export default ListBooks;
