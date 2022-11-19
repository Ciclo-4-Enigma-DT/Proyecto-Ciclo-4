import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
//import ProductoIndividual from './ProductoIndividual'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'



function ProductosDisponibles(){

    const[dataproductos, setdataproductos]=useState([])

    
    useEffect(() => {

        axios.get('api/producto/obtenerproducto').then(res => {
            console.log(res.data)
            setdataproductos(res.data)
        }).catch(err => {
            console.log(err)
        })
       
    },[])


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
        <div>&nbsp; 
            <h2>Lista de Prodcutos Disponibles</h2>
            &nbsp; 
            {dataproductos.filter(productos => productos.cantidad > 0).map(filterproductos => ( 
            <>            
              <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 offset-3' data-aos="flip-right">
                            <ul className='list-group'>
                                <li className='list-group-item'>Id: {filterproductos.idproducto}</li>
                                <li className='list-group-item'>Nombre: {filterproductos.nombre}</li>
                                <li className='list-group-item'>Precio: {filterproductos.precio}</li>
                                <li className='list-group-item'>Detalle: {filterproductos.detalle}</li>
                                <li className='list-group-item'>Cantidad: {filterproductos.cantidad}</li>
                            </ul>
                            &nbsp; 
                    <Link to={`/editarproducto/${filterproductos.idproducto}`}><li className='btn btn-success'>Editar</li></Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={()=>{borrarproducto(filterproductos.idproducto)}}>Borrar</button>
                                       
                    <hr className='mt-4'/>
                        </div>
                    </div>
                </div>
           </>

            ))}
           
        </div>
    )
}
export default ProductosDisponibles