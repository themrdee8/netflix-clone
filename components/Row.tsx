import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
            // console.log(response.data.results);
        });
    }, [fetchURL])
    // console.log(movies);

    /* const slideLeft = () => {
        var slider = document.getElementById("slider" + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider" + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    } */

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>
            {title}
        </h2>
        <div className='relative flex items-center'>
            <MdChevronLeft
                // onClick={sliderLeft}
                className='bg-white left-0 rounded-full cursor-pointer absolute opacity-50 hover:opacity-100 z-10 hidden'
                size={40} 
            />
            <div id={"slider" + rowID} className='w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative'>
                {movies.map((movie, id) => (
                    <Movie key={id} movie={movie}/>
                ))}
            </div>
            <MdChevronRight
                // onClick={sliderRight}
                className='bg-white right-0 rounded-full cursor-pointer absolute opacity-50 hover:opacity-100 z-10 hidden'
                size={40} 
            />
        </div>
    </>
  )
}

export default Row