import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SearchUI = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/movielist/search/${searchTerm}`);
      setSearchResults(response.data);
      navigate(`/search/${searchTerm}`);
    } catch (error) {
      console.error("검색 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <div className="SearchUI">
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>검색 결과</h2>
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.title_kor}>
                <Link to={`/movie/${movie.title_kor}`}>
                  <img src={movie.poster_url} alt={movie.title_kor} />
                  <p>{movie.title_kor}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchUI;
