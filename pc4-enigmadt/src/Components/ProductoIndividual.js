import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'

function ProductoIndividual({producto}){

    const navegar = useNavigate()

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

    //Para animacion de scroll al bajar
    useEffect(() =>{
        AOS.init()
    },[])



    //Funcion para borrar producto
    function borrarproducto(idproducto){
        axios.post('/api/producto/borrarproducto', {idproducto:idproducto})
        .then(res => { 
            console.log(res.data)
            //alert(res.data)
            //Swal.fire('Atencion!', 'El producto se ha eliminado')
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'El Producto fue elimnado correctamente.',
                showConfirmButton: false,
                timer: 1000
            })
            
            sleep(1000).then(() => {
                navegar('/listaproductos')
                window.location.replace('/listaproductos')
              });
            
            
            
        }).catch(err => {
            console.log(err)
        })
        
    }


    return(
        <div className='container'>
            <div className='row'>

                <div className='col-sm-6 offset-3' data-aos="flip-right">

                <ul className='list-group'>
                    <li className='list-group-item'>Id: {producto.idproducto}</li>
                    <li className='list-group-item'>Nombre: {producto.nombre}</li>
                    <li className='list-group-item'>Precio: {producto.precio}</li>
                    <li className='list-group-item'>Detalle: {producto.detalle}</li>
                    <li className='list-group-item'>Cantidad: {producto.cantidad}</li>
                </ul>
                &nbsp;
                <Link to={`/editarproducto/${producto.idproducto}`}><li className='btn btn-success'>Editar</li></Link>
                &nbsp;
                <button className='btn btn-danger' onClick={()=>{borrarproducto(producto.idproducto)}}>Borrar</button>
                
                
                <hr className='mt-4'/>

                </div>


            </div>
            
        </div>
    )

}
export default ProductoIndividual