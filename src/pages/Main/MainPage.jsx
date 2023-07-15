import * as style from "./MainPageStyle"
import React , {useState} from "react"
import MovieList from "../../components/MovieList";
import { useParams } from "react-router-dom";
import SearchUI from "../../components/searchUI";
import SearchMovieList from "../../components/SearchMovieList";

function MainPage(props){
    let {moviePage} = useParams();
    moviePage = 1;
    const [page, setPage] = useState(1); //페이지
    const limit = 16; // posts가 보일 최대한의 갯수
    const offset = (page-1)*limit; // 시작점과 끝점을 구하는 offset

    const postsData = (posts) => {
        if(posts){
          let result = posts.slice(offset, offset + limit);
          return result;
        }
      }

    return(
        <style.Wrapper>
            <style.Container>
                <MovieList/>
            </style.Container>
        </style.Wrapper>
    )

}


export default MainPage;
