import { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'


const useNowPlayingMovies=()=>{
    const dispatch= useDispatch()

useEffect(()=>{
  getNowPlayingMovies()
},[])
const getNowPlayingMovies=async()=>{
const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', options)
const res= await data.json()
dispatch(addNowPlayingMovies(res.results))

}



}

export default useNowPlayingMovies

