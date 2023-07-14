import * as style from "./MainPageStyle"
import React from "react"
import MovieList from "../../components/MovieList";

function MainPage(props){
    

    return(
        <style.Wrapper>
            <style.Container>
                <MovieList/>
            </style.Container>
        </style.Wrapper>
    )

}

export default MainPage;