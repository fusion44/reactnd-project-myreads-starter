import React from "react";
import "../App.css";
import Book from "./Book";
import PropTypes from "prop-types";

class Bookshelf extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">
            {this.props.title}
          </h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map(b => {
                return (
                  <li key={b.id}>
                    <Book book={b} update={this.props.update} />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
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

export default Bookshelf;
