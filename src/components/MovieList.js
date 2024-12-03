import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies of movie cards", movies);

  return (
    <div className=" py-2  ">
      <h1 className="font-semibold text-xl py-2 px-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar scrollbar-thumb-black scrollbar-track-black ">
        <div className="flex  ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
