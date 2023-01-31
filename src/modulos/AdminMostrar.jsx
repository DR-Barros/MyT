import React, {useEffect, useState} from "react";
import AdminModal from "./AdminModal";

function AdminMostrar(datos){
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
                <div className="Admin-product">
                    <p className="Admin-product_info">Foto</p>
                    <p className="Admin-product_info">Nombre</p>
                    <p className="Admin-product_info">Marca</p>
                    <p className="Admin-product_info">Escala</p>
                    <p className="Admin-product_info">Categoria</p>
                    <p className="Admin-product_info">Precio</p>
                    <p className="Admin-product_info">SKU</p>
                    <p className="Admin-product_info">cantidad</p>
                </div>
                {
                    datos.datos.map((data)=>(
                        <div className="Admin-product">
                            <img src={"http://drive.google.com/uc?export=view&id=" + data.Fotos[0]} alt="foto producto" />
                            <p className="Admin-product_info">{data.Nombre}</p>
                            <p className="Admin-product_info">{data.Marca}</p>
                            <p className="Admin-product_info">{data.Escala}</p>
                            <p className="Admin-product_info">{data.Categoria}</p>
                            <p className="Admin-product_info">$ {data.Precio}</p>
                            <p className="Admin-product_info">{data.SKU}</p>
                            <p className="Admin-product_info">{data.cantidad}</p>
                            <button onClick={()=>{
                                setModal(!modal)
                                setModalData(data)
                            }} className="Admin-product_info">
                                Editar
                            </button>
                        </div>
                    ))
                }
                <AdminModal info={modalData} mostrar={modal} onshow={()=>{setModal(!modal)}} />
            </>
        )
    }
}
export default AdminMostrar