



import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movie= useSelector((store)=> store.movies?.nowPlayingMovies)
    if (movie===null) return 

    const mainMovie=movie[0]
    const {original_title,overview,id}= mainMovie
    // console.log(mainMovie)
    // console.log(original_title,overview)
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer