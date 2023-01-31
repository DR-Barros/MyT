import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './modulos/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import HowBuy from './pages/HowBuy'
import Contact from './pages/Contact'
import db from './modulos/Firebase';
import { useEffect, useState, React } from 'react';
import { collection, getDocs } from "firebase/firestore";
import Admin from './pages/Admin';
import Carro from './pages/Carro';


function App() {
  const [datos, setDatos] = useState([])
  const [carro, setCarro] = useState([])
  const fetchPost = async () => {   
    await getDocs(collection(db, "Productos"))
      .then((querySnapshot)=>{              
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setDatos(newData); 
      })
   
  }
  useEffect(()=>{
    if (datos.length === 0){
      fetchPost();
    }
    else {
      console.log("Los datos son", datos)
      console.log("carro: ", carro)
    }
  })

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout carro={carro}/>} >
            <Route index element={<Home/>} />
            <Route path='Sobre Nosotros' element={<AboutUs />} />
            <Route path='Productos' element={<Products datos={datos} carro={(producto)=>{setCarro(carro.concat(producto))}}/>} />
            <Route path='Como Comprar' element={<HowBuy/>} />
            <Route path='Contacto' element={<Contact/>} />
            <Route path='Administrar' element={<Admin datos={datos}/>} />
            <Route path='Carro' element={<Carro carro={carro}/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

/* class App extends React.Component{
  constructor(props){
    super(props);
    this.datos = ["Data"]
  }
  componentDidMount(){
    this.fetchPost()
  }
  fetchPost = async () => {   
    await getDocs(collection(db, "Productos"))
      .then((querySnapshot)=>{              
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          this.setDatos(newData);                
          console.log(this.datos, newData);
      })
   
  }
  render(){
    return(
      <h1>Hola mundo</h1>
    )
  }
} */
export default App;
