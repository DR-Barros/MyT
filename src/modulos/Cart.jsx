import { Link } from "react-router-dom"
import { useState } from 'react'
import Carro_img from '../resources/cart.svg'
import './Cart.css'
function Cart({carro}){
    const[checked, setChecked] = useState(false)
    const handleOnchange = () => {
        setChecked(!checked)
    }
    return(
        <div className='Carro'>
            <input checked={checked} onChange={() =>{handleOnchange()}} type="checkbox" className="Carro_check" />
            <img className='Carro_img' src={Carro_img} alt="carro" />
            <div className="Carro_len">
            <span>{carro.length}</span>
            </div>
            <div className='Carro_modal'>
                {
                    carro.map((data)=>(
                        <>
                            <p>{data.Nombre}</p>
                            <p>${data.Precio}</p>
                        </>
                    ))
                }
                <p className="total">Total:</p>
                <p>{carro.map(item => item.Precio).reduce((prev, curr)=>prev+curr, 0)}</p>
                <button onClick={()=>{handleOnchange()}}>Cerrar</button>
                <Link className="Carro_link" to="Carro" onClick={()=>{handleOnchange()}}>ir a Carro</Link>
                
            </div>
        </div>
    )
}
export default Cart