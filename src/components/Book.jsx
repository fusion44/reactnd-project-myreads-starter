import React from "react";
import "../App.css";
import BookshelfChanger from "./BookshelfChanger";
import PropTypes from "prop-types";

class Book extends React.Component {
  state = {
    statusText: "",
  };

  changeShelf(shelfName) {
    this.props.update({
      ...this.props.book,
      shelf: shelfName,
    });

    this.setState({ statusText: this.getShelfText(shelfName) });
  }

  componentDidMount() {
    if (this.props.status === true && this.props.book.shelf !== "none") {
      this.setState({ statusText: this.getShelfText(this.props.book.shelf) });
    }
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
        {this.props.status === true &&
          <div className="book-status">
            {this.state.statusText}
          </div>}
      </div>
    );
  }

  getShelfText(shelfName) {
    if (shelfName === "read") {
      return "Read";
    } else if (shelfName === "wantToRead") {
      return "Want To Read";
    } else if (shelfName === "currentlyReading") {
      return "Currently Reading";
    }
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
  status: PropTypes.bool,
};

export default Book;
