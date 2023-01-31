import React from "react";
import db from "./Firebase";
import {ref, set } from "firebase/database"

function AdminModal(modal){
    if (modal.mostrar){
        return(
            <div>
                <div>
                    <h3>Agregar producto</h3>
                    <form action={subirProducto} method="post">
                        <button type="submit">Enviar</button>
                    </form>
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
function subirProducto(data){
    set(ref(db,"Productos"+data.SKU), data)
}
export default AdminModal