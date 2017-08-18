import React from "react";
import * as BooksAPI from "../BooksAPI";
import "../App.css";
import SearchBar from "./SearchBar";
import Book from "./Book";
import PropTypes from "prop-types";

class SearchBooks extends React.Component {
  state = {
    query: "",
    displayError: false,
    errorMessage: "",
    results: [],
  };

  queryChanged(val) {
    this.setState({ query: val.trim() });
    if (val !== "") {
      BooksAPI.search(val, 20).then(books => {
        if (this.state.query === "") {
          // since setState is async, the user might have cleared the
          // search box while this request ongoing. In this case, ignore
          // the results and clear the search page
          this.setState({
            displayError: false,
            errorMessage: "",
            results: [],
          });
          return;
        }

        if (books.error !== undefined) {
          this.setState({ displayError: true, errorMessage: books.error });
        } else {
          let bookResults = [];
          books.forEach(book => {
            let author = "unknown";
            if ("authors" in book) {
              author = book.authors[0];
              if (book.authors.length > 1) {
                for (let i = 1; i < book.authors.length; i++) {
                  author += ", " + book.authors[i];
                }
              }
            }

            let thumbnail = "";
            if (book.imageLinks !== undefined) {
              thumbnail = "url(" + book.imageLinks.thumbnail + ")";
            }
            let matches = this.props.books.filter(
              bk => (bk.id === book.id ? bk : undefined),
            );
            let shelf = matches.length > 0 ? matches[0].shelf : "none";

            bookResults.push({
              id: book.id,
              title: book.title,
              author: author,
              shelf: shelf,
              url: thumbnail,
            });
          });
          this.setState({
            displayError: false,
            results: bookResults,
          });
        }
      });
    } else {
      this.setState({
        displayError: false,
        errorMessage: "",
        results: [],
      });
    }
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar
          val={this.state.query}
          onQueryChange={this.queryChanged.bind(this)}
        />
        <div className="search-books-results">
          {this.state.displayError
            ? <h1
                style={{
                  display: "block",
                  width: "100%",
                }}
              >
                <center>Sorry, no search results found</center>
              </h1>
            : <ol className="books-grid">
                {this.state.results.map(b => {
                  return (
                    <li key={b.url}>
                      <Book book={b} update={this.props.update} status={true} />
                    </li>
                  );
                })}
              </ol>}
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
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

export default SearchBooks;
