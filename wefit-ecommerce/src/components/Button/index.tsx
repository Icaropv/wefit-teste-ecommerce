import React from 'react';
import carrinho from '../../modules/movies/assets/carrinho.png'
import { useCart } from '../../modules/cart/hooks/useCart'
import type { Movie } from '../../types/index'; 

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  children: React.ReactNode;
  movie: Movie

}

export const ButtonCart = ({ movie }: ButtonProps) => {
  const { addMovieToCart, getItemQuantity } = useCart();

  const quantityInCart = getItemQuantity(movie.id);
  const isAdded = quantityInCart > 0;

  const colorClass = isAdded ? 'bg-green-500' : 'bg-[#009EDD]';
  

  return (
    <button
      onClick={() => addMovieToCart(movie)} 
      className={`${colorClass} h-[45px] w-[300px] text-white flex justify-center items-center gap-4 rounded-[5px]`}
    >
      <div className='flex gap-1 items-center'>
        <img src={carrinho} alt="" className='h-[20px]' />
        <p>{quantityInCart}</p> 
      </div>
      <div>
        <p className="text-xs font-bold">Adicionar ao carrinho</p> 
      </div>
    </button>
  );
}

export default ButtonCart;