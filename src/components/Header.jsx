import React from 'react'
import logo from '../assets/Netflix_Logo.png'
const Header = () => {
  return (
    <div className='absolute z-10 px-8 py-2 bg-gradient-to-b from-black w-full'>
        <img className='w-48' src={logo} alt="Netflix logo" />
    </div>
  )
}

export default Header