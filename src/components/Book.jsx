import React from "react";
import "../App.css";
import BookshelfChanger from "./BookshelfChanger";
import PropTypes from "prop-types";

class Book extends React.Component {
  state = {};

  changeShelf(shelfName) {
    this.props.update({
      ...this.props.book,
      shelf: shelfName,
    });
  }

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
            <BookshelfChanger changeShelf={this.changeShelf.bind(this)} />
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  update: PropTypes.func.isRequired,
};

export default Book;
