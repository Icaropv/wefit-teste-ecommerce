
import Button from '../../../../components/Button';
import { Link } from 'react-router-dom';
import successBuy from '../../assets/successBuy.png'



const Success = () => {

  
  return (
    <div className='bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center mx-auto my-8 h-[500px] w-[360px] md:w-[1150px] '>
      <div className='mb-6'>
        <h1 className='font-semibold text-2xl md:text-3xl text-gray-800 mb-2'>
          Compra realizada com sucesso
        </h1>
       
      </div>

      <div className='mb-6'>
        <img 
          src={successBuy} 
          alt="Carrinho vazio" 
          className='h-40 md:h-60 w-auto mx-auto' 
        />
      </div>
      
      <div className='w-full max-w-xs flex justify-center items-center'>
       <Link to='/' ><Button children='VOLTAR' complementalClassname='w-[200px]'/></Link>
      </div>
    </div>
  );
};

export default Success;