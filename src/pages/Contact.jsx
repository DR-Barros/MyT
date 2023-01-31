import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"
import { useRef } from "react";

function Contact(){
    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm("service_she81hb","template_kzfxa8l", form.current, "Mokkl1I6Kj9jE4H7O")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <>
            <div className="Tittle">
                <h1>Contacto</h1>
            </div>
            <form ref={form} onSubmit={sendEmail} className="Contact-form" >
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