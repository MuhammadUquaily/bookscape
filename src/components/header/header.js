import { React, useState } from "react";
import './header.css';

const Header = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSearch(1, searchTerm);
    }
  };

  return (
    <div className="header">
      <input
        className="search-bar"
        placeholder="Search for a book"
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleEnter(e)}
      />
      <button
        onClick={() => handleSearch(1, searchTerm)}
        className="search-button"
      >
        Search
      </button>
    </div>
  );
};

export default Header;
