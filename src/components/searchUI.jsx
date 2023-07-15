import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchUI() {
  const navigate = useNavigate();
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
    <div className="SearchUI">
      <input
        type="text"
        placeholder="영화 제목을 입력하세요."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

export default SearchUI;
