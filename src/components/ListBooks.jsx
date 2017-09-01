import React from "react";
import "../App.css";
import Bookshelf from "./Bookshelf";
import TitleBar from "./TitleBar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Wave } from "better-react-spinkit";

const ListBooks = props => {
  return (
    <div className="list-books">
      <TitleBar title="MyReads" />
      <div className="list-books-content">
        <Bookshelf
          title="Currently Reading"
          shelfId="currentlyReading"
          books={props.books.filter(
            book => (book.shelf === "currentlyReading" ? book : undefined),
          )}
          update={props.update}
        />
        <Bookshelf
          title="Want to Read"
          shelfId="wantToRead"
          books={props.books.filter(
            book => (book.shelf === "wantToRead" ? book : undefined),
          )}
          update={props.update}
        />
        <Bookshelf
          title="Read"
          shelfId="read"
          books={props.books.filter(
            book => (book.shelf === "read" ? book : undefined),
          )}
          update={props.update}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
      {props.loading && <Wave className="loading-indicator" />}
    </div>
  );
};

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
  loading: PropTypes.bool.isRequired,
};

export default ListBooks;
