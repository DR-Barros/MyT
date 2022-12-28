import carro from '../resources/cart.svg'
import './Cart.css'
function Cart(){
    return(
        <div className='Carro'>
            <img className='Carro_img' src={carro} alt="carro" />
        </div>
    )
}
export default Cart