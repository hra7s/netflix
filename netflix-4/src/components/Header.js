
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const user= useSelector(store=> store.user)
//console.log(user)
useEffect(()=>{
  

  const auth = getAuth();
  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,displayName,email,photoURL} = user
      // console.log("user:",user)
     
      dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}))
      navigate("/browse")
     
      // ...
    } else {
      // User is signed out
      dispatch(removeUser())
       navigate("/")
      // ...
    }
  });
  return  ()=> unsubscribe()

},[])

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
        {user && (<div className='flex p-4'>
          <img className=' w-7 h-7 m-4' src={user.photoURL} alt="default-user" />
          <button onClick={handleSignOut}>(Sign out)</button>
        </div>)}
    </div>
  )
}

export default Header