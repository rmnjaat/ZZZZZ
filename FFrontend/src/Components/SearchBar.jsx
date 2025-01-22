import React, { useState } from 'react';
import './Search.css'; // Ensure the CSS file is imported
import { toast } from 'react-toastify';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchQuery.trim() === '') {
      toast.warn('Please enter a search term');
      return;
    }
    onSearch(searchQuery);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search here..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
