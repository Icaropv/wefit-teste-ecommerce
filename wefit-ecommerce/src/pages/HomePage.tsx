
import useMovies from '../modules/movies/hooks/useMovies'
import { MovieGrid } from '../modules/movies/components/MovieGrid'
import Empty from '../components/Empty';
import { Loading } from '../components/loading';




const HomePage = () => {
    const {movies, isLoading, error} = useMovies()

    if(isLoading) {
        return <div className=' w-full flex justify-center '><Loading/></div>
    }
    
    if (error) {
        return <div className='w-full flex justify-center items-center'>
          <Empty typeCall='home'/> 
        </div>
    }
    

  return (
    <div  className="  bg-[#2F2E41] flex justify-center  items-baseline-last">
      
     <MovieGrid movies={movies}/>
     
    </div>
  )
}

export default HomePage
