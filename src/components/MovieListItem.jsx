import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 10rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  cursor: pointer;
  background: transparent;
  &:hover {
    background-color: lightgrey;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 16rem;
`;

const MovieName = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
`;

function MovieListItem(props) {
  const { movie, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <MoviePoster src={movie.poster_url} alt={movie.title_kor} />
      <MovieName>{movie.title_kor}</MovieName>
    </Wrapper>
  );
}

export default MovieListItem;
