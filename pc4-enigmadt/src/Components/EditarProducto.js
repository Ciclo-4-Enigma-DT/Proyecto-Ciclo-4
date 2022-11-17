import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

function EditarProducto(){

    const params = useParams()

    //Hooks
    const[nombre, setNombre]=useState('')
    const[precio, setPrecio]=useState('')
    const[detalle, setDetalle]=useState('') 
    const[cantidad, setCantidad]=useState('') 
    
    //Para volver atras al index
    const navegar =useNavigate()

    
    useEffect(() => {
        axios.post('/api/producto/obtenerdataproducto', {idproducto:params.idproducto}).then(res => {
            console.log(res.data[0])
            const dataproducto = res.data[0]
            setNombre(dataproducto.nombre)
            setPrecio(dataproducto.precio)
            setDetalle(dataproducto.detalle)
            setCantidad(dataproducto.cantidad)
        })
    },[] )

    //Funcion que actualiza

    function editarProducto(){

        //nuevo objeto para actualizar el producto
        const actualizarproducto = {
            nombre: nombre,
            precio: precio,
            detalle: detalle,
            cantidad: cantidad,
            idproducto: params.idproducto
        }

    

    //Hacer peticion usando Axios
    axios.post('/api/producto/actualizaproducto', actualizarproducto)
    .then(res => {
        console.log(res.data)
        //alert(res.data)
        Swal.fire('Felicidades', 'El producto se actualizo con exito')
        navegar('/listaproductos')
    })
    .then(err => {console.log(err)})


}

    return(
        <div className='container'>
            <div className='row'>                
                    <h2 className='mt-4'>Editar Prodcuto</h2>                
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>   
                    <div className='mb-3'>
                        <label htmlFor="nombre" className='form-label'>Nombre</label>
                        <input type="text" className=' form-control' value={nombre} onChange={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="precio" className='form-label'>Precio</label>
                        <input type="text" className=' form-control'value={precio} onChange={(e) => {setPrecio(e.target.value)}}/>
                    </div>  
                    <div className='mb-3'>
                        <label htmlFor="detalle" className='form-label'>Detalle</label>
                        <input type="text" className=' form-control'value={detalle} onChange={(e) => {setDetalle(e.target.value)}}/>
                    </div>   
                    <div className='mb-3'>
                        <label htmlFor="cantidad" className='form-label'>Cantidad</label>
                        <input type="text" className=' form-control'value={cantidad} onChange={(e) => {setCantidad(e.target.value)}}/>
                    </div> 

                    <button onClick={editarProducto} className='btn btn-success'>Actualizar Producto</button>                
                </div>
            </div>
            
        </div>
    )

}
export default EditarProducto