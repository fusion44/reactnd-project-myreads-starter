import React from "react";
import "../App.css";
import Book from "./Book";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";
import Types from "../DNDTypes";

const shelfTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    props.update({
      ...item.book,
      shelf: props.shelfId,
    });
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class Bookshelf extends React.Component {
  state = {};

  render() {
    const { connectDropTarget, isOver } = this.props;
    let shelfClass = "bookshelf";
    if (isOver) {
      shelfClass = "bookshelf-highlight";
    }

    return connectDropTarget(
      <div>
        <div className={shelfClass}>
          <h2 className="bookshelf-title">
            {this.props.title}
          </h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map(b => {
                return (
                  <li key={b.id}>
                    <Book book={b} update={this.props.update} draggable />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>,
    );
  }
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelfId: PropTypes.string.isRequired,
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

export default DropTarget(Types.BOOK, shelfTarget, collect)(Bookshelf);
