
import type { Movie } from '../../../../types'
import ButtonCart from '../../../../components/Button'
interface MovieCardProps {
    movie: Movie
}



const MovieCard = ({movie}: MovieCardProps) => {
  return (
    <div className='w-[350px] h-[390px] bg-white flex flex-col items-center justify-evenly rounded-[5px] '>

        <div>
            <img src={movie.image} alt="" className='h-50 '/>
        </div>

        <div className='flex flex-col items-center font-semibold'>
            <p>{movie.title}</p>
            <p>R$ {movie.price}</p>
        </div>

        <div>
         <ButtonCart children='Adicionar ao carrinho' movie={movie} />
        </div>
     
    </div>
  )
}

export default MovieCard
