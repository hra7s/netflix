



import React from 'react'
import { IoCaretForwardCircle } from "react-icons/io5";


const VideoTitle = (props) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black'>
    <h1 className='text-6xl font-bold text-white'>{props.title}</h1>
    <p className='py-6 text-lg w-1/4 text-white'>{props.overview}</p>
    <div className=' flex'>
        <button className=' bg-gray-300 text-black p-2 m-4 rounded-lg flex text-xl'><span ><IoCaretForwardCircle className='h-8 w-8' /></span> <span className=' ml-2'>Play Now</span></button>
        <button className=' bg-gray-300 text-black p-2 m-4 rounded-lg flex text-xl' >More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle