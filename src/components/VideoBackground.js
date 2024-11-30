import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';

const VideoBackground = () => {


  const getMovieVideos = async ()=>{
   
    const data = await fetch('https://api.themoviedb.org/3/movie/1241982/videos?language=en-US', API_OPTIONS);
    const json = data.json();
    console.log("moviebackground",json);
    // const filterTrailer = json.results.filter((video) => video.type === "Trailer");
    // console.log("filter trailer",filterTrailer);

  }

  useEffect(()=>{
    getMovieVideos();
  },[]);


  return (
    <div>
      VideoBackground
    </div>
  )
}

export default VideoBackground
