import { Link } from "react-router-dom";
import cesta from '../../assets/cesta.png'
import { useCart } from "../../modules/cart/hooks/useCart";

export function Header() {

    const {items} = useCart()

    const itemCount = items.reduce((total, item) => total + item.quantity, 0)

    return(
        <header className="flex text-white bg-[#2F2E41] justify-between p-7 h-[88px] items-center lg:px-50" >
            <div>
                <Link to="/"><h1 className="text-[30px] font-semibold">WeMovies</h1></Link>
                
            </div>

            <div className="flex gap-3 text-gray-400">
                <div>
                    <h2 className="hidden md:block">Meu carrinho</h2>
                    <span >{itemCount} itens</span>
                </div>
                
                <Link to='/cart'>
                    <img src={cesta} alt="" className="h-[25px] w-[25px]"/>
                </Link>
                

            </div>
        </header>
    )
}