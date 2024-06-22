
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const navigate= useNavigate()
  const handleSignOut=()=>{
  

const auth = getAuth();
signOut(auth).then(() => {
  navigate("/")
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className=' absolute flex justify-between w-full z-10 px-8 py-2 bg-gradient-to-b from-black'>
        <img className='w-44 px-2' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"  alt="app-logo"/>
        <div className='flex p-4'>
          <img className=' w-7 h-7 m-4' src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png" alt="default-user" />
          <button onClick={handleSignOut}>(Sign out)</button>
        </div>
    </div>
  )
}

export default Header