import React from 'react';
import emailjs from '@emailjs/browser';
import './Carro.css'
class Carro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            direcction: ""
        }
        this.nameChange = this.nameChange.bind(this)
        this.emailChange = this.emailChange.bind(this)
        this.direcctionChange = this.direcctionChange.bind(this)
        this.submitEmail = this.submitEmail.bind(this)
    }
    nameChange(e){
        this.setState({
            name: e.target.value,
            email: this.state.email,
            direcction: this.state.direcction,
        })
    }
    emailChange(e){
        this.setState({
            name: this.state.name,
            email: e.target.value,
            direcction: this.state.direcction,
        })
    }
    direcctionChange(e){
        this.setState({
            name: this.state.name,
            email: this.state.email,
            direcction: e.target.value,
        })
    }
    submitEmail(e){
        e.preventDefault()
        var carrito =""
        this.props.carro.map((data)=>{
            carrito +=`
            <img src="http://drive.google.com/uc?export=view&id=${data.Fotos[0]}" alt="foto producto" />
            <p>${data.SKU}</p>
            <p>${data.Nombre}</p>
            <p>$ ${data.Precio}</p>
            `
        })
        const mailarray = {
            carro: carrito,
            name: this.state.name,
            email: this.state.email,
            direcction: this.state.direcction,
        } 
        emailjs.send("service_she81hb","template_d12hnlm", mailarray, "Mokkl1I6Kj9jE4H7O")
        .then((result) => {
            alert(result.text);
        }, (error) => {
            alert(error.text);
        });
    }
    render(){
        return(
            <>
                <div className="Tittle">
                    <h1>Carro</h1>
                </div>
                <div className="carroPage">
                    {
                        this.props.carro.map((data)=>(
                            <>
                                <img src={"http://drive.google.com/uc?export=view&id=" + data.Fotos[0]} alt="foto producto" />
                                <p>{data.Nombre}</p>
                                <p>${data.Precio}</p>
                                <button>Sacar del Carro</button>
                            </>
                        ))
                    }
                    <form onSubmit={this.submitEmail}>
                        <label htmlFor="name">Nombre:</label>
                        <input value={this.state.name} onChange={this.nameChange} type="text" id='name' name='name'/>
                        <label htmlFor="email">Email:</label>
                        <input value={this.state.email} onChange={this.emailChange} type="email" id='email' name='email'/>
                        <label htmlFor="direccion">Dirección de envio:</label>
                        <input value={this.state.direcction} onChange={this.direcctionChange} type="text" name="direccion" id="direccion" />
                        <button type="submit">Comprar</button>
                    </form>
                </div>
            </>
        )
    }
}
export default Carro