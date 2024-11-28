import React from 'react'
import { LOGO_URL } from '../utils/constants'

const Header = (isSignIn) => {
  return (
    <div className='absolute z-10 ml-40 py-2 bg-gradient-to-b from-black text-white'>
      <img className='w-44' alt="logo" src ={LOGO_URL} />
     {/* {isSignIn? "Hi":""} */}
    </div>

  )
}

export default Header
