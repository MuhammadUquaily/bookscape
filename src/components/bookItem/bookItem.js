import React from "react";
import './bookItem.css'

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
          alt={book.title}
        />
      ) : (
        <div className="placeholder-cover">No Cover Available</div>
      )}
      <h2>{book.title}</h2>
      <p>{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
      <p>{book.first_publish_year || "Year Unknown"}</p>
    </div>
  );
};

export default BookItem;
