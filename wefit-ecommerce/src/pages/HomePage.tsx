import React from 'react'
import MovieCard from '../modules/movies/components/MovieCard/index'
import useMovies from '../modules/movies/hooks/useMovies'
import { MovieGrid } from '../modules/movies/components/MovieGrid'
import type { Movie } from '../types';
import Empty from '../components/Empty';
import { Loading } from '../components/loading';




const HomePage = () => {
    const {movies, isLoading, error} = useMovies()

    if(isLoading) {
        return <div className=' w-full flex justify-center mt-10'><Loading/></div>
    }
    
    if (error) {
        return <Empty typeCall='home'/>
    }
    

  return (
    <div  className=" p-5 bg-[#2F2E41] flex justify-center  items-baseline-last">
     <MovieGrid movies={movies}/>
     
    </div>
  )
}

export default HomePage
