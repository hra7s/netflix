



import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux"

const SecondaryContainer = () => {

  const movies= useSelector(store=> store.movies)
  // console.log(movies)
  return(
    <div className=''>
    
    <div className=' -mt-50'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Telugu"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer