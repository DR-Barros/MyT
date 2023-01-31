import React, {useEffect, useState} from "react";
import "./MostrarProductos.css"
import ProductosModal from "./ProductosModal";

function MostrarProductos(datos){
    const [cargando, setCargando] = useState(true)
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState({})
    useEffect(()=>{
        if (datos.datos.length !== 0){
            setCargando(false)
        }
    })
    if (cargando){
        return(
            <>
                <p>Cargando</p>
            </>
        )
    }
    else {
        return(
            <>
                    {
                        datos.datos.map((data)=>(
                            <div className="producto_preview">
                                <img src={"http://drive.google.com/uc?export=view&id=" + data.Fotos[0]} alt="foto producto" />
                                <p>{data.Nombre}</p>
                                <div>
                                    <p>$ {data.Precio}</p>
                                    <button onClick={()=>{
                                        setModal(!modal)
                                        setModalData(data)
                                    }}>
                                        Ver mas
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                    <ProductosModal info={modalData} mostrar={modal} onshow={()=>{setModal(!modal)}} carro={(producto)=>{datos.carro(producto); setModal(!modal)}} />
            </>
        )
    }
}
export default MostrarProductos