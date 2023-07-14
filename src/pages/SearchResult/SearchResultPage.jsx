import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams, Link } from "react-router-dom";
import SearchUI from "../../components/searchUI";

const SearchResultPage = () => {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/movielist/search/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div className="SearchResultPage">
      <h2>검색 결과 페이지</h2>
      <SearchUI onSearch={handleSearch} />
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
    

export default SearchResultPage;
