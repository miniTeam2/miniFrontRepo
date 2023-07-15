import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MovieListItem from "./MovieListItem";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

function SearchMovieList(props) {
  const {searchTerm} = props
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);

  const fetchData = async () => {
    try {
      const movieListData = await axios.get(
        `https://port-0-minibackrepo1-k19y2klk242hfg.sel4.cloudtype.app/movielist/search/${searchTerm}`
      );
      console.log(movieListData.data)
      setMovieData(movieListData.data.movies);
    } catch (error) {
      alert("정보를 가져오는데 실패했습니다.");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);


  const handleClickItem = (movie) => {
    navigate(`/movie/${movie.title_kor}`);
  };

  return (
    <Wrapper>
      <MoviesContainer>
          <MovieListItem
            key={movieData.title_eng}
            movie={movieData}
            onClick={() => handleClickItem(movieData)}
          />
      </MoviesContainer>
    </Wrapper>
  );
}

export default SearchMovieList;
