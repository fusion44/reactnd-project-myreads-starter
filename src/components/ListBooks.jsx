import React from "react";
import "../App.css";
import Bookshelf from "./Bookshelf";
import TitleBar from "./TitleBar";
import { Link } from "react-router-dom";

class ListBooks extends React.Component {
  state = {
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

  render() {
    return (
      <div className="list-books">
        <TitleBar title="MyReads" />
        <div className="list-books-content">
          <Bookshelf title="Currently Reading" books={this.state.books} />
          <Bookshelf title="Want to Read" books={this.state.books} />
          <Bookshelf title="Read" books={this.state.books} />
          <Bookshelf title="None" books={this.state.books} />
        </div>
        <div className="open-search">
          <Link
            to="/search"
            onClick={() => this.setState({ showSearchPage: true })}
          >
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
