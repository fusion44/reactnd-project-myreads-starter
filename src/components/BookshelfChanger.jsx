import React from "react";
import PropTypes from "prop-types";
import "../App.css";

class BookshelfChanger extends React.Component {
  state = {};

  onChangeShelf(shelfName) {
    this.props.changeShelf(shelfName.target.value);
  }

  render() {
    return (
      <div>
        <div className="book-shelf-changer">
          <select
            value={this.props.value}
            onChange={this.onChangeShelf.bind(this)}
          >
            <option value="" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    );
  }
}

BookshelfChanger.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default BookshelfChanger;
