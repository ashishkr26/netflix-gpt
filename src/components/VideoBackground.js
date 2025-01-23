import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ mainMovie }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${mainMovie?.id || 0}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      console.log("Fetched video data:", json);

      const filterData = json.results?.filter(
        (video) => video.type === "Trailer" && video.name === "Official Trailer"
      ) || [];

      dispatch(addTrailerVideo(filterData));
    } catch (err) {
      console.error("Error fetching movie videos:", err);
    }
  };

  // Handle cases where trailerVideo is undefined or empty
  if (!trailerVideo || trailerVideo.length === 0 || !trailerVideo[0]?.key) {
    return <p>No trailer available for this movie.</p>;
  }

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo[0].key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VideoBackground;
