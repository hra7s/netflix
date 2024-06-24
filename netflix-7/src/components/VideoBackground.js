import React, { useEffect,useState } from "react";
import { addTrailer } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
const VideoBackground = ({ movie_id }) => {
  const dispatch= useDispatch()


 const id= useSelector(store=>store.movies?.trailerVideo?.key)

  // const [id,setId]= useState()
  const getMovieVideos = async () => {
    
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      options
    );
    const json = await movie.json();

    const filterData = json.results.filter((each) => each.type === "Trailer");
    console.log("tariler", filterData);
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // setId(trailer.key)
    dispatch(addTrailer(trailer))
    console.log(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div className=" w-screen">
      <iframe
      className=" w-screen aspect-video "
       
        src={"https://www.youtube.com/embed/"+id +"?autoplay=1&&mute=1"}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
        // allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
