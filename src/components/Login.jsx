import React, { useState } from 'react'
import Header from './Header'
import background from '../assets/background.jpg'
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src={background} alt="background" />
      </div>
      <form className='w-3/12 absolute my-32 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80'>
        <h2 className='font-bold text-3xl py-4'>{isSignInForm ?"Sign In":"Sign Up"  }</h2>
        { !isSignInForm &&
          <input type="text" placeholder='Full Name' className='p-4 my-2 w-full bg-gray-950 opacity-80 border rounded-sm'/>}
        <input type="text" placeholder='Email address' className='p-4 my-2 w-full bg-gray-950 opacity-80 border rounded-sm'/>
        <input type="password" placeholder='Password ' className='p-4 my-2 w-full bg-gray-950 opacity-80 border rounded-sm'/>
        <button className='p-4 my-4 bg-red-700 w-full rounded-sm h-10 flex items-center justify-center font-bold hover:bg-red-800'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm 
          ? "New to Netflix? Sign Up Now" 
          : "Already registered? Sign In Now."}
          </p>
      </form>
    </div>
  )
}

export default Login