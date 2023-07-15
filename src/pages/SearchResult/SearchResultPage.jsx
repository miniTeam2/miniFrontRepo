import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchMovieList from "../../components/SearchMovieList";

const SearchResultPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieData, setMovieData] = useState([]);

  const handleSearch = async () => {
    try {
      const movieListData = await axios.get(
        `https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/movielist/search/${searchTerm}/`
      );
      console.log(movieListData.data.results);
      setMovieData(movieListData.data.results);
    } catch (error) {
      alert("정보를 가져오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    if (searchTerm !== "") {
      handleSearch();
    }
  }, [searchTerm]);

  return (
    <div>
      <div>
        <h2>검색하기</h2>
        <input
          type="text"
          placeholder="영화 제목을 입력하세요."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
        {movieData && <SearchMovieList movieData={movieData} />}
      </div>
    </div>
  );
};

export default SearchResultPage;
