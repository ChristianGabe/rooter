import React from "react";

import MovieList from "./MovieList";

function Home(props){
    return(
        <div>
        <MovieList movies={props.data} />
        
        </div>
    )
}
export default Home