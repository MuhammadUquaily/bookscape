import React from "react";
import './bookList.css'
import BookItem from '../bookItem/bookItem'

const BookList = ({books}) => {
    return (
        <div>
        {books.map((book) => (
            <BookItem book={book} key={book.isbn} />
        ))}
        </div>
    )
}

export default BookList