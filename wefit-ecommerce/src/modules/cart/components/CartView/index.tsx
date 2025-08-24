import { useCart } from '../../hooks/useCart';
import { CartItem } from '../CartItens';
import { CartTotal } from '../CartTotal';
import Empty from '../../../../components/Empty';

export function CartView() {
  const { items } = useCart();

  if (items.length === 0) {
    return <Empty typeCall='cart'/>;
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md  max-w-6xl mx-auto" >
      
      
     
      <div className="hidden md:flex justify-between text-gray-400 font-bold uppercase text-xs pb-4 border-b border-gray-300">
        <span className="w-2/5">PRODUTO</span>
        <span className="w-1/5 text-center">QTD</span>
        <span className="w-1/5 text-center">SUBTOTAL</span>
        <span className="w-1/5 text-center"></span>
      </div>

     
      <div>
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      
      <CartTotal />
    </div>
  );
}