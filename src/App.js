import React from "react";
import "./App.css";
import Bookshelf from "./components/Bookshelf";
import SearchBooks from "./components/SearchBooks";
import TitleBar from "./components/TitleBar";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        shelf: "reading",
        url:
          'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
      },
      {
        title: "Ender's Game",
        author: "Orson Scott Card",
        shelf: "reading",
        url:
          'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
      },
    ],
  };

  handleCloseSearch() {
    this.setState({ showSearchPage: false });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage
          ? <SearchBooks closeSearch={this.handleCloseSearch.bind(this)} />
          : <div className="list-books">
              <TitleBar title="MyReads" />
              <div className="list-books-content">
                <Bookshelf title="Currently Reading" books={this.state.books} />
                <Bookshelf title="Want to Read" books={this.state.books} />
                <Bookshelf title="Read" books={this.state.books} />
                <Bookshelf title="None" books={this.state.books} />
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>
                  Add a book
                </a>
              </div>
            </div>}
      </div>
    );
  }
}

export default BooksApp;
