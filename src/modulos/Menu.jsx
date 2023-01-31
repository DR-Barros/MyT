import { Link } from "react-router-dom"
import Cart from "./Cart"
import "./Menu.css"

function Menu({carro}){
    return(
        <header className="Navegacion">
            <input type="checkbox" className="burger-menu" />
            <svg viewBox="0 0 100 80" width="40px" height="40px" className="burger-logo">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
            </svg>
            <h1 className="Navegacion_Logo">Maquetas <span>y</span> Trenes</h1>
            <Cart carro={carro}></Cart>
            <nav className="Navegacion_nav">
                <Link className="Navegacion_nav-item" to="">Inicio</Link>
                <Link className="Navegacion_nav-item" to="Sobre Nosotros">Sobre Nosotros</Link>
                <Link className="Navegacion_nav-item" to="Productos">Productos</Link>
                <Link className="Navegacion_nav-item" to="Como Comprar">Cómo comprar</Link>
                <Link className="Navegacion_nav-item" to="Contacto">Contacto</Link>
            </nav>
        </header>
    )
}
export default Menu