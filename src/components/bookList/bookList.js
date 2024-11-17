import React from "react";
import './bookList.css';
import BookItem from '../bookItem/bookItem';

const BookList = ({ books, currentPage, hasNextPage, handlePageChange }) => {
  return (
    <div className="book-list-container">
      <button
        className="nav-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        ←
      </button>
      <div className="book-list">
        {books.map((book) => (
          <BookItem book={book} key={book.isbn || book.key} /> 
        ))}
      </div>
      <button
        className="nav-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNextPage}
      >
        →
      </button>
    </div>
  );
};

export default BookList;
