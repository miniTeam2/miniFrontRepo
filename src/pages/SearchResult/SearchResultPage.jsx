import React, { useState, useEffect } from "react";
//import axios from "axios";
import {useParams} from "react-router-dom";
import SearchUI from "../../components/searchUI";
import SearchMovieList from "../../components/SearchMovieList";
const SearchResultPage = () => {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get(`https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/movielist/search/${searchTerm}`);
  //     setSearchResults(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   if (searchTerm) {
  //     handleSearch();
  //   }
  // }, [searchTerm]);
//<SearchUI onSearch={handleSearch} />h2 뒤에 있었떤
  return (
    <div className="SearchResultPage">
      <h2>검색 결과 페이지</h2>
      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>검색 결과</h2>
          <SearchMovieList
            searchTerm = {searchTerm}/>
        </div>
        )}
        </div>
      );
    };
  // searchResults && searchResults.length>0

export default SearchResultPage;
