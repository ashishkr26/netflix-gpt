import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 px-2 shadow-2xl bg-black'>
      <img alt="movie-card" src={IMG_CDN_URL + posterPath }/>
    </div>
  )
}

export default MovieCard
