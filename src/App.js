import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import BookList from './components/bookList/bookList';

function App() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [context, setContext] = useState("bestsellers"); // Tracks current view (bestsellers or search)
  const [searchTerm, setSearchTerm] = useState(""); // Tracks user search term

  useEffect(() => {
    fetchBooks(1, "", "bestsellers");
  }, []);
  
  const fetchBooks = async (page, term, source) => {
    const query = source === "bestsellers" ? "bestsellers" : encodeURIComponent(term || "");
    const limit = 14;

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=${limit}&page=${page}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setBooks(data.docs);
      setCurrentPage(page);
      setHasNextPage(data.docs.length === limit);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  const handleSearch = (page = 1, term = "") => {
    setSearchTerm(term); 
    setContext(term.trim() ? "search" : "bestsellers"); 
    fetchBooks(page, term, term.trim() ? "search" : "bestsellers");
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1) return; 
    fetchBooks(newPage, searchTerm, context);
  };

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <BookList
        books={books}
        currentPage={currentPage}
        hasNextPage={hasNextPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
