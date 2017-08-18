import React from "react";
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks.jsx";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  updateBook(book) {
    BooksAPI.update(book, book.shelf).then(data => {
      if (book.shelf !== "none") {
        let newBooks = this.state.books.slice();
        newBooks.push(book);
        this.setState({ books: newBooks });
      } else {
        let newBooks = this.state.books.filter(bk => {
          if (bk.id !== book.id) return book;
          else return undefined;
        });
        this.setState({ books: newBooks });
      }
    });
  }

  componentDidMount() {
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
          shelf: "none",
          url: thumbnail,
        };
      });
      this.setState({ books: bookObjects });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() =>
            <ListBooks
              update={this.updateBook.bind(this)}
              books={this.state.books}
            />}
        />
        <Route
          path="/search"
          render={() =>
            <SearchBooks
              update={this.updateBook.bind(this)}
              books={this.state.books}
            />}
        />
      </div>
    );
  }
}

export default BooksApp;
