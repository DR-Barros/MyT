import React from "react";
import "./Contact.css"

function Contact(){
    return (
        <>
            <div className="Tittle">
                <h1>Contacto</h1>
            </div>
            <form className="Contact-form" method="post">
                <label htmlFor="name">Nombre</label>
                <input name="name" type="name" autoComplete="name" id="name"></input>
                <label htmlFor="email">Mail</label>
                <input name="email" id="email" type="email"></input>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}
export default Contact