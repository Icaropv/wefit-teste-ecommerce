import { create } from 'zustand';
import type { CartItem } from '../../../types';
import type { Movie } from '../../../types';

interface CartState {
  items: CartItem[];
  addMovieToCart: (movie: Movie) => void;
  getItemQuantity: (movieId: number) => number;
  incrementItemQuantity: (movieId: number) => void; 
  decrementItemQuantity: (movieId: number) => void; 
  removeItemFromCart: (movieId: number) => void;    
  totalPrice: number; 
  clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  totalPrice: 0,



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
      const newTotal = updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      set({ totalPrice: newTotal });
    } else {
      const newItem: CartItem = { ...movie, quantity: 1 };
      const updatedItems = [...items, newItem];
      set({ items: updatedItems });
  
      const newTotal = updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      set({ totalPrice: newTotal });
    }
  },

  getItemQuantity: (movieId: number) => {
    const { items } = get();
    const item = items.find(item => item.id === movieId);
    return item ? item.quantity : 0; 
  },

  incrementItemQuantity: (movieId) => {
    const updatedItems = get().items.map(item =>
      item.id === movieId ? { ...item, quantity: item.quantity + 1 } : item
    );

    const newTotal = updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    set({ items: updatedItems, totalPrice: newTotal });
  },

  decrementItemQuantity: (movieId) => {
    const existingItem = get().items.find(item => item.id === movieId);
    let updatedItems;

    if (existingItem?.quantity === 1) {
      updatedItems = get().items.filter(item => item.id !== movieId);
    } else {
      updatedItems = get().items.map(item =>
        item.id === movieId ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
   
    const newTotal = updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    set({ items: updatedItems, totalPrice: newTotal });
  },

  removeItemFromCart: (movieId) => {
    const updatedItems = get().items.filter(item => item.id !== movieId);
   
    const newTotal = updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    set({ items: updatedItems, totalPrice: newTotal });
  },

  clearCart: () => {
    set({ items: [], totalPrice: 0 });
  },
}));