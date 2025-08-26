import { renderHook, act } from '@testing-library/react';
import { useCart } from '../modules/cart/hooks/useCart';
import type { Movie } from '../types';

const mockMovie: Movie = {
  id: 1,
  title: 'Test Movie',
  price: 29.99,
  image: 'test.jpg',
};

describe('useCart - ESSENTIAL', () => {
  test('should add and remove items from cart', () => {
    const { result } = renderHook(() => useCart());
    
   
    act(() => {
      result.current.addMovieToCart(mockMovie);
    });
    expect(result.current.items).toHaveLength(1);
    
   
    act(() => {
      result.current.removeItemFromCart(mockMovie.id);
    });
    expect(result.current.items).toHaveLength(0);
  });
});