import React from 'react'
import {Link} from 'react-router-dom'


function ProductoIndividual({producto}){


    //let {id,name, precio}=data;,data,addToCart

    return(
        <div className='container'>
            <div className='row'>

                <div className='col-sm-6 offset-3'>

                <ul className='list-group'>
                    <li className='list-group-item'>{producto.idproducto}</li>
                    <li className='list-group-item'>{producto.nombre}</li>
                    <li className='list-group-item'>{producto.precio}</li>
                    <li className='list-group-item'>{producto.detalle}</li>
                </ul>


                &nbsp;
                <button className='btn btn-danger'>Borrar</button>
                &nbsp;
                
                <hr className='mt-4'/>

                </div>


            </div>
            
        </div>
    )

}
export default ProductoIndividual