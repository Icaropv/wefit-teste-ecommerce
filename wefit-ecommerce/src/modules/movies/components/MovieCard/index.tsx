
import type { Movie } from '../../../../types'
import ButtonCart from '../ButtonAddToCart'
interface MovieCardProps {
    movie: Movie
}



const MovieCard = ({movie}: MovieCardProps) => {

  const formatedPrice  = (movie.price).toFixed(2).replace('.', ','); 

  return (
    <div className='w-[330px] h-[390px] bg-white flex flex-col items-center justify-evenly rounded-[5px] '>

        <div>
            <img src={movie.image} alt="" className='h-50 '/>
        </div>

        <div className='flex flex-col items-center font-semibold'>
            <p>{movie.title}</p>
            <p>R$ {formatedPrice}</p>
        </div>

        <div>
         <ButtonCart children='Adicionar ao carrinho' movie={movie} />
        </div>
     
    </div>
  )
}

export default MovieCard
