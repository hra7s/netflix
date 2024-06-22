import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAuth, updateProfile } from "firebase/auth";

import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch= useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          const auth = getAuth();
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuzp1nGJNdpu9uBTKMIciYJYfqyELSMwRhw&s",
          })
            .then(() => {
              navigate("/browse")
              const {uid,displayName,email,photoURL} = user
       
              dispatch(addUser({uid:uid,displayName:displayName,email:email,photoURL:photoURL}))
              // Profile updated!
              // ...
            })
            .catch((error) => {
              setErrorMessage("user not valid")
              // An error occurred
              // ...
            });
          navigate("/browse");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          setIsSignInForm(false);
        });
    }
  };

  //
  return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12 rounded-lg bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        {!isSignInForm && (
          <input
           ref={name}
            type="text"
            placeholder="Full Name"
            className="rouded-lg p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          className=" rounded-lg p-4 my-4 w-full bg-gray-700"
          type="email"
          placeholder="Email address"
        />
        <input
          ref={password}
          className=" rounded-lg p-4 my-4 w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        <button
          className="p-3 my-6 rounded-lg bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
