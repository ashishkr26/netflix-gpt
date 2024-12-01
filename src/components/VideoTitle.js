import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className=' relative py-48 px-6 z-10'>
      <h1 className='text-5xl font-bold text-white'>{title}</h1>
      <p className='py-6 text-base w-1/3 text-white'>{overview}</p>
      <div > 
        <button className=' mx-4 bg-gray-500 px-10 text-xl py-2 text-white rounded-sm bg-opacity-80'>Play</button>
        <button className='p-2 bg-red-500 text-white text-xl rounded-sm'>More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
