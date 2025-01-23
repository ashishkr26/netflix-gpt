import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  // Return a fallback message or null if no movies are available
  if (!movies || movies.length === 0) {
    return <p>No movies are currently available.</p>;
  }

  // Safely access the first movie
  const mainMovie = movies[0] || {};
  const { original_title = "Untitled", overview = "No description available" } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground mainMovie={mainMovie} />
    </div>
  );
};

export default MainContainer;
