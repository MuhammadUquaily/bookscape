import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/header/header'

function App() {

  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  
  const handleSearch = async (page = 1, searchTerm = "") => {
    if (!searchTerm || !searchTerm.trim()) return;

    const limit = 15;
    try {
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}&limit=${limit}&page=${page}`
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
  }

  useEffect(() => {}, [books]);
  useEffect(() => {}, [currentPage]);
  useEffect(() => {}, [hasNextPage]);

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
    </div>
  );
}

export default App;
