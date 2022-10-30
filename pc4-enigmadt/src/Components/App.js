import { Header } from "./Header"
import '../Styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AgregarProducto from "./AgregarProducto"
import ListaProductos from "./ListaProductos"
import Ventas from "./verVentas"
import Carrito from './ShopingCart';


export function App(){
    return(
        <div className="App">

            <Header /> 

            <BrowserRouter>
            <Routes>
              <Route path='/' element={<ListaProductos/>} exact></Route>
              <Route path='/agregarproducto' element={<AgregarProducto/>} exact></Route>
              <Route exact path="/reporteventas" element={<Ventas/>}></Route>   
              <Route exact path="/reporteventas" element={<Ventas/>}></Route>  
              <Route exact path="/carrito" element={<Carrito/>}></Route> 
            </Routes>        
          </BrowserRouter>  
          

        </div>
    )
}