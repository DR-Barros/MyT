import React from "react";

function Contact(){
    return (
        <>
            <div className="Tittle">
                <h1>Contacto</h1>
            </div>
            <form>
                <label htmlFor="name">Nombre</label>
                <input type="name" autoComplete="name" id="name"></input>
                <label htmlFor="email">Mail</label>
                <input id="email" type="email"></input>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}
export default Contact