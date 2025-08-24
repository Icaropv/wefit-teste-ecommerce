
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';

import Button from '../../../../components/Button';

export function CartTotal() {
  const { totalPrice, clearCart } = useCart();


  const formattedTotal = totalPrice.toFixed(2).replace('.', ',');

  function handleFinishOrder() {
      clearCart()
  }

  return (
    <div className="mt-6 pt-4 border-t border-gray-300">
      {/* Versão Desktop */}
      <div className="hidden md:flex justify-between items-center">
     

        <Link to='/success'><Button children='FINALIZAR PEDIDO' onClick={handleFinishOrder} complementalClassname='w-[200px]'/></Link>

        <div className="flex items-center">
          <span className="text-gray-400 font-bold mr-4">TOTAL</span>
          <span className="text-2xl font-bold text-gray-800">R$ {formattedTotal}</span>
        </div>
      </div>
      
      
      <div className="md:hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400 font-bold">TOTAL</span>
          <span className="text-2xl font-bold text-gray-800">R$ {formattedTotal}</span>
        </div>
        
         <Link to='/success'><Button children='FINALIZAR PEDIDO' onClick={handleFinishOrder} complementalClassname='w-[330px]' /></Link>
      </div>
    </div>
  );
}