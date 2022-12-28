import { Link } from "react-router-dom"
import Cart from "./Cart"
import "./Menu.css"

function Menu(){
    return(
        <header className="Navegacion">
            <h1 className="Navegacion_Logo">Maquetas <span>y</span> Trenes</h1>
            <Cart></Cart>
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