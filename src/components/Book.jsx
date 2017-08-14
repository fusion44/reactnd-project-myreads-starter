import React from "react";
import "../App.css";
import BookshelfChanger from "./BookshelfChanger";
import PropTypes from "prop-types";

class Book extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: this.props.book.url,
              }}
            />
            <BookshelfChanger />
          </div>
          <div className="book-title">
            {this.props.book.title}
          </div>
          <div className="book-authors">
            {this.props.book.author}
          </div>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
