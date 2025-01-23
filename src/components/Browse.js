import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

useNowPlayingMovies();
console.log("now_playing", )
 

  return (
    <div className="w-full">
      <Header />
      {/*
      MainContainer
        -VideoContainer
        -VideoTitle

      ListContainer
        -MoviesList *n
          -MovieCards *n
      */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
