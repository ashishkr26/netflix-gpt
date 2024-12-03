import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='w-screen aspect-video  absolute py-48 px-16 bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold text-white'>{title}</h1>
      <p className='py-6 text-base w-1/3 text-white'>{overview}</p>
      <div > 
        <button className=' bg-white px-10 text-xl py-2 text-black rounded-sm bg-opacity-90 hover:opacity-70'>Play</button>
        <button className='p-2 mx-2 bg-red-600 text-white text-xl rounded-sm'>More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
