import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { json } from "react-router-dom";

const VideoBackground = () => {
  const [trailerId, SetTrailerId] = useState();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1241982/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    console.log("fd", filterData[0].key);

    SetTrailerId(filterData[0].key);
    console.log(trailerId);
    // const filterTrailer = json.results.filter((video) => video.type === "Trailer");
    // console.log("filter trailer",filterTrailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div className="absolute top-0 h-screen w-screen">
      <iframe
        className=" h-screen w-screen"
        src={"https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
