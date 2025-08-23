import { create } from 'zustand';
import type { CartItem } from '../../../types';
import type { Movie } from '../../../types';


interface CartState {
  items: CartItem[];
  addMovieToCart: (movie: Movie) => void;
  getItemQuantity: (movieId: number) => number;
  
}


export const useCart = create<CartState>((set, get) => ({
  

  items: [],


  addMovieToCart: (movie) => {
    const { items } = get(); 
    const existingItem = items.find(item => item.id === movie.id);

    if (existingItem) {
      
      const updatedItems = items.map(item =>
        item.id === movie.id
          ? { ...item, quantity: item.quantity + 1 }  
          : item
      );
      set({ items: updatedItems }); 
    } else {
      
      const newItem: CartItem = { ...movie, quantity: 1 };
      set({ items: [...items, newItem] }); 
    }
  },


  getItemQuantity: (movieId: number) => {
    const { items } = get();
    const item = items.find(item => item.id === movieId);
    
    return item ? item.quantity : 0; 
  },
}));