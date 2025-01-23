import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie, addPopularMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log("Now Playing Movies:", json.results);
      setNowPlayingMovies(json.results); // Update local state
      dispatch(addNowPlayingMovie(json.results)); // Dispatch to Redux
    } catch (err) {
      console.error("Error fetching now playing movies:", err);
      setError(err.message);
    }
  };

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log("Popular Movies:", json.results);
      setPopularMovies(json.results); // Update local state
      dispatch(addPopularMovie(json.results)); // Dispatch to Redux
    } catch (err) {
      console.error("Error fetching popular movies:", err);
      setError(err.message);
    }
  };

  return { nowPlayingMovies, popularMovies, error };
};

export default useNowPlayingMovies;
