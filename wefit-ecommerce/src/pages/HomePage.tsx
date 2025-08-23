import React from 'react'
import MovieCard from '../modules/movies/components/MovieCard/index'
import useMovies from '../modules/movies/hooks/useMovies'
import { MovieGrid } from '../modules/movies/components/MovieGrid'
import type { Movie } from '../types';




const HomePage = () => {
    const {movies, isLoading, error} = useMovies()

    if(isLoading) {
        return 
    }
    
    if (error) {
        return <p>Ocorreu um erro</p>
    }
    

  return (
    <div  className=" p-5 bg-[#2F2E41] flex justify-center">
     <MovieGrid movies={movies}/>
    </div>
  )
}

export default HomePage
