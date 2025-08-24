
import type { CartItem as CartItemType } from '../../../../types';
import { useCart } from '../../hooks/useCart';
import trashIcon from '../../assets/trash.png'
import plusIcon from '../../assets/plus.png'
import minusIcon from '../../assets/minus.png'

interface CartItemProps {
    item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
    const { incrementItemQuantity, decrementItemQuantity, removeItemFromCart } = useCart();
    const subtotal = (item.price * item.quantity).toFixed(2).replace('.', ',');
    const formatedPrice  = (item.price).toFixed(2).replace('.', ',');

    return (
        <>
            {/* desktop */}
            <div className="hidden md:flex justify-between items-center py-4  border-gray-300">
                <div className="flex items-center w-2/5">
                    <img src={item.image} alt={item.title} className='h-[100px] w-[80px] object-cover mr-4' />

                    <div>
                        <h1 className='font-bold'>{item.title}</h1>
                        <p className='font-bold'>R$ {formatedPrice}</p>
                    </div>
                </div>
                
                <div className="flex justify-center w-1/5">
                    <div className='flex items-center gap-2'>
                        <button onClick={() => decrementItemQuantity(item.id)}>
                            <img src={minusIcon} alt="Diminuir" className='size-6' />
                        </button>
                        
                        <div className='border border-gray-500 h-7 w-16 text-center rounded-[5px] flex items-center justify-center'>
                            {item.quantity}
                        </div>
                        
                        <button onClick={() => incrementItemQuantity(item.id)}>
                            <img src={plusIcon} alt="Aumentar" className='size-6' />
                        </button>
                    </div>
                </div>
                
                <div className="text-center w-1/5 font-bold">
                    R$ {subtotal}
                </div>
                
                <div className="flex justify-center w-1/5">
                    <button onClick={() => removeItemFromCart(item.id)}>
                        <img src={trashIcon} alt="Remover" className='size-6' />
                    </button>
                </div>
            </div>
            
            {/* mobile */}
            <div className="flex md:hidden  border-gray-300 py-4">
                <img src={item.image} alt={item.title} className='h-[100px] w-[80px] object-cover mr-3' />
                
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h1 className='font-bold text-'>{item.title}</h1>
                        <p className='font-bold'>R$ {item.price.toFixed(2).replace('.', ',')}</p>
                        <button 
                            onClick={() => removeItemFromCart(item.id)}
                            className="flex items-center text-red-500 text-sm"
                        >
                            <img src={trashIcon} alt="Remover" className='size-4 mr-1' />
                        </button>
                    </div>
                    
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <button onClick={() => decrementItemQuantity(item.id)}>
                                <img src={minusIcon} alt="Diminuir" className='size-6' />
                            </button>
                            
                            <div className='border border-gray-500 h-7 w-16 text-center rounded-[5px] flex items-center justify-center'>
                                {item.quantity}
                            </div>
                            
                            <button onClick={() => incrementItemQuantity(item.id)}>
                                <img src={plusIcon} alt="Aumentar" className='size-6' />
                            </button>
                        </div>
                        
                        <div className='flex flex-col items-end mt-10'>
                            <p className="text-[15px] text-gray-500">SUBTOTAL</p>
                            <p className='font-bold text-[20px]'>R$ {subtotal}</p>
                        </div>
                    </div>
                    
                
                </div>
            </div>
        </>
    );
}