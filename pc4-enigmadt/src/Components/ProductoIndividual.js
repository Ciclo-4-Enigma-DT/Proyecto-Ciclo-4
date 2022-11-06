import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ProductoIndividual({producto}){

    const navegar = useNavigate()

    //Para animacion de scroll al bajar
    useEffect(() =>{
        AOS.init()
    },[])


    //Funcion para borrar producto
    function borrarproducto(idproducto){
        axios.post('/api/producto/borrarproducto', {idproducto:idproducto}).then(res => {
            console.log(res.data)
            alert(res.data)
            navegar(0)
            
        }).catch(err => {
            console.log(err)
        })
    }


    return(
        <div className='container'>
            <div className='row'>

                <div className='col-sm-6 offset-3' data-aos="flip-right">

                <ul className='list-group'>
                    <li className='list-group-item'>{producto.idproducto}</li>
                    <li className='list-group-item'>{producto.nombre}</li>
                    <li className='list-group-item'>{producto.precio}</li>
                    <li className='list-group-item'>{producto.detalle}</li>
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