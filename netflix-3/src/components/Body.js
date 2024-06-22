import {useEffect} from "react"
import {useDispatch} from "react-redux"
import Login from './Login'
import { addUser, removeUser } from "../utils/userSlice"
import Browse from './Browse'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";



const Body = () => {

  const dispatch= useDispatch()
  // const navigate = useNavigate()
  const appRouter= createBrowserRouter([
    {
        path:"/",
        element : <Login/>
    },
    
       {
            path:"/browse",
            element : <Browse/>
        }
    
])

useEffect(()=>{
  

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,displayName,email} = user
        console.log(user)
        dispatch(addUser({uid:uid,displayName:displayName,email:email}))
        // navigate("/browse")
       
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        // navigate("/")
        // ...
      }
    });

},[])

return (
<div>
    
    <RouterProvider router={appRouter}/>
</div>
)
}

export default Body