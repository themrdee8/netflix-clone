import React from 'react'
import FavoriteButton from './FavoriteButton';

const Movie = ({ movie }) => {

  return (
    <div className='inline-block cursor-pointer relative p-2 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] group'>
        <img 
            className='cursor-pointer object-cover block transition duration rounded-md delay-300 w-full h-auto group-hover:scale-110' 
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} 
            alt={movie?.title || movie?.name} 
        />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/50 rounded-md hover:opacity-100 opacity-0 text-white group-hover:scale-105 delay-300'>
            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                {movie?.title || movie?.name}
            </p>
            <FavoriteButton movieId={movie?.id} />
        </div>
    </div>
  )
}

export default Movie