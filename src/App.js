import React from "react";
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks.jsx";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class BooksApp extends React.Component {
  state = {
    loading: false,
    books: [],
  };

  updateBook(book) {
    this.setState({ loading: true });

    if (book.shelf !== "none") {
      let found = false;
      let newBooks = this.state.books.map(bk => {
        // If book id matches, update to the new book object,
        // otherwise return the old book object
        if (book.id === bk.id) {
          found = true;
          return book;
        } else {
          return bk;
        }
      });

      if (!found) {
        newBooks.push(book);
      }

      this.setState({ books: newBooks });
    } else {
      let newBooks = this.state.books.filter(bk => {
        if (bk.id !== book.id) return book;
        else return undefined;
      });
      this.setState({ books: newBooks });
    }

    BooksAPI.update(book, book.shelf)
      .then(data => {
        this.setState({ loading: false });
      })
      .catch(reason => {
        alert("Something went wrong while updating your book");
        console.log(reason);
      });
  }

  componentDidMount() {
    this.setState({ loading: true });
    BooksAPI.getAll().then(books => {
      let bookObjects = books.map(book => {
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

        return {
          id: book.id,
          title: book.title,
          author: author,
          shelf: book.shelf,
          url: thumbnail,
        };
      });
      this.setState({ loading: false, books: bookObjects });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              loading={this.state.loading}
              update={this.updateBook.bind(this)}
              books={this.state.books}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              update={this.updateBook.bind(this)}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(BooksApp);
