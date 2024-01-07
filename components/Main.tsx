import requests from '@/pages/api/requests';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsInfoLg } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        });
    }, [])
    console.log(movie)

   const trancateString = (info, number) => {
        if (info?.length > number) {
            return info.slice(0, number) + '...';
        } else {
            return info;
        }
   }

  return (
    <div className='relative w-full h-[56.25vw] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[56.25vw] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
                <p className='text-1xl md:text-4xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
                    {movie?.title || movie?.name}
                </p>
                <p className='text-gray-400 text-[10px] md:text-sm'>
                    {movie?.release_date}
                </p>
                <p className='text-white text-[10px] md:text-[13px] mt-3 md:mt-8 md:w-[80%] lg:w-[50%] drop-shadow-xl'>
                    {trancateString(movie?.overview, 180)}
                </p>
                <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
                    <button className='bg-white py-1 md:py-2 rounded-md text-black flex flex-row items-center text-center w-auto px-2 md:px-4 font-semibold hover:bg-neutral-300 transition text-xs lg:text-lg'>
                        <FaPlay className='mr-1' />
                        Play
                    </button>
                    <button className='bg-white bg-opacity-30 py-1 md:py-2 px-2 md:px-4 rounded-md w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition'>
                        <BsInfoLg className="mr-1" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main