import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchUI=({ onSearch = () => {} }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch(searchTerm);
      navigate(`/search/${searchTerm}`);
    }
  };
  return (
    <div className="SearchUI">
      <input
        type="text"
        placeholder="영화 제목을 입력하세요."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick ={handleSearch}>검색</button>
    </div>
  );
};

export default SearchUI;