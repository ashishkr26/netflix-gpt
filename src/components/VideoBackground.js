import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
// import { json } from "react-router-dom";

const VideoBackground = () => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  console.log("td", trailerVideo[0]);

  // const [trailerId, SetTrailerId] = useState();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1241982/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );

    dispatch(addTrailerVideo(filterData));

    // SetTrailerId(filterData[0].key);
    // console.log(trailerId);
    // const filterTrailer = json.results.filter((video) => video.type === "Trailer");
    // console.log("filter trailer",filterTrailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo[0].key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
