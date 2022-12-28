import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './modulos/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import HowBuy from './pages/HowBuy'
import Contact from './pages/Contact'


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path='Sobre Nosotros' element={<AboutUs />} />
            <Route path='Productos' element={<Products/>} />
            <Route path='Como Comprar' element={<HowBuy/>} />
            <Route path='Contacto' element={<Contact/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
