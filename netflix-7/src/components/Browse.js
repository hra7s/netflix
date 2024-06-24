
import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import GPTSearch from './GptSearch.js'
import { useSelector } from 'react-redux'


const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()

  const showGptSearch= useSelector(store=>store.gpt.showGptSearch)
  console.log(showGptSearch)
 
  return (
    <div>
      <Header/>
      {
        showGptSearch ?  <GPTSearch /> :<> 
      <MainContainer/>
      <SecondaryContainer/></>
      }
     
      
    </div>
  )
}

export default Browse