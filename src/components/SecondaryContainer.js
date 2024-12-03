import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-36 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.popularMovies} />
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
        <MovieList
          title={"Upcoming Playing"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Romantic Playing"}
          movies={movies.nowPlayingMovies}
        />
      </div>

      {/* 
      Movie list
        movie card*n
      Movie List - Now playing
      Movie List - Now trending
      Movie List -Recommended
       */}
    </div>
  );
};

export default SecondaryContainer;
