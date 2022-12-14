import "../Styles/header.css"
import { FaCartPlus } from "react-icons/fa"
import { RiOmega } from "react-icons/ri"


export function Header() {
    return (
        <>
            <body>
            <div className="App">     
 
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">OHM' Site</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/listaproductos">Lista de Productos</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="agregarproducto">Agregar Producto</a>
            </li>       
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="productosdisponibles">Productos disponibles</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="reporteventas">Reporte de Ventas</a>
            </li>    
          </ul> 
          <a className="navbar-brand" href="carrito"><FaCartPlus/></a>           
        </div>
      </div>
    </nav>



    </div>
            </body>
        </>
    )
}