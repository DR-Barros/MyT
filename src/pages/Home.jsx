import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home(){
    return (
        <>
            <div className="Tittle Home-tittle">
                <h2>
                    Importación y venta de artículos <br />
                    de ferromodelismo y Maquetismo
                </h2>
            </div>
            <div className="Home-cuerpo">
                <div className="Home-catalogo">
                    <h2>Catálogo</h2>
                    <Link className="Home-link" to="Productos">Ver</ Link>
                </div>
                <div className="Home-about">
                    <h2>Sobre nosotros</h2>
                    <Link className="Home-link" to="Sobre Nosotros">Ver</Link>
                </div>
            </div>
        </>
    )
}
export default Home