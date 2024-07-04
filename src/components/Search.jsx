import React, { useState } from 'react';
import "../css/Search.css"
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
      />
      {/* Nếu bạn cần nút tìm kiếm, có thể thêm vào đây */}
      {/* <button className="search-button">Search</button> */}
    </div>
  );
};

export default Search;
