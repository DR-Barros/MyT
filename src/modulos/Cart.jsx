import Carro_img from '../resources/cart.svg'
import './Cart.css'
function Cart({carro}){
    return(
        <div className='Carro'>
            <img className='Carro_img' src={Carro_img} alt="carro" />
            <div className="Carro_len">
            <span>{carro.length}</span>
            </div>
        </div>
    )
}
export default Cart