import React from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../modulos/Firebase";
import AdminMostrar from "../modulos/AdminMostrar";
import "./Admin.css"
import AdminModal from "../modulos/AdminModal";

class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            usuarios: {},
            login: false,
            modal: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    
    componentDidMount(){
        const fetchPost = async () => {   
            await getDocs(collection(db, "User"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                this.setState({
                    usuarios: newData[0],
                    login: this.state.login,
                    modal: this.state.modal
                })
            })
        }
        fetchPost()
        
    }
    onClick(){
        this.setState({
            usuarios: this.state.usuarios,
            login: this.state.login,
            modal: true
        })
        console.log("click")
    }
    handleSubmit(event){
        if (this.state.usuarios.Usuario === event.target[0].value & this.state.usuarios.Contraseña === event.target[1].value){
            this.setState({
                usuarios: this.state.usuarios,
                login: true,
                modal: this.state.modal
            })
        }
        event.preventDefault();
    }
    render(){
        if (this.state.login){
            return(
                <>
                    <div className="Admin-menu">
                        <h2>Administrar productos</h2>
                        <button onClick={this.onClick}>agregar productos</button>
                    </div>
                    <div>
                        <AdminModal mostrar={this.state.modal} onshow={()=>{this.setState({usuarios: this.state.usuarios, login: this.state.login, modal: false})}}  />
                        <AdminMostrar datos={this.props.datos} />
                    </div>
                </>
            )
        } else {
            return(
                <form onSubmit={this.handleSubmit} method="post" className="Admin-login">
                    <label htmlFor="Usuario">Usuario:</label>
                    <input type="text" name="Usuario" id="Usuario" required/>
                    <label htmlFor="Contraseña">Contraseña:</label>
                    <input type="password" name="Contraseña" id="Contraseña" required/>
                    <button type="submit">Entrar</button>
                </form>
            )
        }
    }
}

export default Admin