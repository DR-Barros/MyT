import React from "react";
import MostrarProductos from "../modulos/MostrarProductos";
import "./Products.css"

function Products({datos, carro}){
    return (
        <>  
            <div className="Tittle">
                <h1>Productos</h1>
            </div>
            <div className="products">
                <div className="filtro">
                    <h4>Filtros</h4>
                    <div>
                        <h6>Escala</h6>
                        <h6>Categoria</h6>
                        <h6>Marca</h6>
                    </div>
                </div>
                <div className="mostrar-Productos">
                    <MostrarProductos datos={datos} carro={(producto)=>{carro(producto)}} />
                </div>
            </div>
        </>
    )
}
export default Products
