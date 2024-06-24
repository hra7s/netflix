



import React from 'react'
import lang from "../utils/languageConstants"
import {useSelector} from "react-redux"

const GptSearchBar = () => {

  const langKey= useSelector(store=>store.config.lang)
  console.log(lang[langKey])

  return (
    <div className=' pt-[8%] flex justify-center'>
      <form className=' w-1/2 bg-black grid grid-cols-12'>
        <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder}/>
        <button className='py-2 px-4 col-span-3 bg-red-600 m-4 text-white rounded-lg '>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar