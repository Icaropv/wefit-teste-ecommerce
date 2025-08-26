import { useEffect, useRef } from 'react';
import emptyImage from '../../assets/empty.png';
import { useToast } from '../../hooks/useToast';
import Button from '../Button';
import { Link } from 'react-router-dom';

interface EmptyType {
  typeCall: "home" | "cart";
}


const Empty = ({ typeCall }: EmptyType) => {
  const {showError} = useToast()
const hasShownToast = useRef(false); 

  useEffect(() => {
    if (!hasShownToast.current) {
      if (typeCall === 'cart') {
        showError("Seu carrinho está vazio! ");
      } else {
        showError("Erro ao carregar os filmes");
      }
      hasShownToast.current = true; 
    }
  }, [typeCall, showError]);

  return (
    <div className='bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center mx-auto my-8 h-[500px] w-[340px] md:w-[1150px] '>
      <div className='mb-6'>
        <h1 className='font-semibold text-2xl md:text-3xl text-gray-800 mb-2'>
          Parece que não há nada por aqui :(
        </h1>
       
      </div>

      <div className='mb-6'>
        <img 
          src={emptyImage} 
          alt="Carrinho vazio" 
          className='h-40 md:h-60 w-auto mx-auto' 
        />
      </div>
      
      <div className='w-full max-w-xs flex justify-center items-center'>
        {typeCall === 'cart' ? (
          
          
          <Link to='/' className='flex w-full justify-center items-center'>
            <Button 
              children='VOLTAR' 
              complementalClassname='w-[200px]'
            />
          </Link>
          
          
        ) : (
          <Button 
            children='Recarregar página' 
            onClick={() => window.location.reload()}
            complementalClassname='w-[200px]'
          />
        )}
      </div>
    </div>
  );
};

export default Empty;