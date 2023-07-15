import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
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
  const { movieData } = props;
  const navigate = useNavigate();
  

  const handleClickItem = (movie) => {
    navigate(`/movie/${movie.title_kor}`);
  };

  return (
    <Wrapper>
      <MoviesContainer>
        {movieData.map((movie)=>
          <MovieListItem
            key={movie.title_eng}
            movie={movie}
            onClick={() => handleClickItem(movieData)}
          />
          )}
      </MoviesContainer>
    </Wrapper>
  );
}

export default SearchMovieList;
