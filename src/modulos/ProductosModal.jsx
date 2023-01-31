import React from "react";
import "./ProductosModal.css"

function ProductosModal(modal){
    if (modal.mostrar){
        return(
            <div className="productModal-container">
                <div className="productModal">
                    <div className="productModal-fotos">
                        <img src={"http://drive.google.com/uc?export=view&id=" + modal.info.Fotos[0]} alt="Foto principal" className="principal" />
                        <div className="productModal-carrusel">

                        </div>
                    </div>
                    <div className="productModal-info">
                        <h1>{modal.info.Nombre}</h1>
                        <h4>Marca: {modal.info.Marca}</h4>
                        <p>SKU: {modal.info.SKU}</p>
                        <p>Precio: ${modal.info.Precio}</p>
                        <button onClick={()=>{
                            modal.carro([modal.info])
                            console.log(modal.info)
                            }}>
                                Comprar
                        </button>
                    </div>
                    <p className="productModal-description">{modal.info.descripcion}</p>
                    <button onClick={modal.onshow}>cerrar</button>
                </div>
            </div>
        )
    } else{
        return(
            <>
            </>
        )
    }
}
export default ProductosModal