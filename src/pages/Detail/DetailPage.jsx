import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import styled from "styled-components"
import StaffList from "../../components/StaffList"

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50rem;
`;

const MovieContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 720px;
    height:50rem;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    margin: 20px;
`;

const TitleText = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    `

const TitleTextKor = styled.div`
    font-size: 30px;
    text-align: left;
    ;
`

const TitleTextEng = styled.div`
    text-align:left
    font-size: 20px;`

const ImageSector = styled.img`
    width: 50%;
    height: 30rem;
    `

const InfSector = styled.div`
    width: 50%;
    height: 30rem;
    padding-left: 20px;`

function DetailPage({ id }) {
  const [movie, setMovie] = useState([]);

  const { movieName } = useParams();

  const fetchMovieDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.hufs-likelion-movie.kro.kr/movies/1`
      );
      setMovie(response.data);
    } catch (error) {
      alert("영화 정보를 가져오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  if (!movie) {
    return <div>Loading...</div>; // 데이터 로딩 중에 표시할 내용
  }

  return (
    <Wrapper>
        <TitleTextKor>{movie.title_kor}</TitleTextKor>
        <TitleTextEng>{movie.title_eng}</TitleTextEng>
        <MovieContainer>
            <ImageSector src= {movie.poster_url}></ImageSector>
            <InfSector>
                <p>{movie.rate}</p>
                <p>장르 : {movie.genre}</p>
                <p>상영시간 : {movie.showtimes}</p>
                <p>개봉일 : {movie.release_date}</p><br/>
                <p>관객평점 : {movie.rating_aud}</p>
                <p>비평가평점 : {movie.rating_cri}</p>
                <p>인터넷 평점 : {movie.rating_net}</p><br />
                <p>줄거리<br /> {movie.summary}</p>
            </InfSector>
      </MovieContainer>
        <StaffList></StaffList>

    </Wrapper>
  );
}

export default DetailPage;
