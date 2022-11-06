import React, {useState, useNavigate} from 'react'
import uniquid  from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'


function AgregarProducto(){

    //const navegar =useNavigate()
     //Para volver atras al index
     //const navegar =useNavigate()

    //Hooks
    const[nombre, setNombre]=useState('')
    const[precio, setPrecio]=useState('')
    const[detalle, setDetalle]=useState('')

    

    function agreagarProducto(){
        var producto = {
            nombre: nombre,
            precio: precio,
            detalle: detalle,
            idproducto: uniquid()
        }
        console.log(producto)

        axios.post('/api/producto/agregarproducto', producto)
        .then(res => {
            console.log(res.data)
            //alert(res.data)
            
            Swal.fire('Felicidades', 'El producto se creo con exito')
            //navegar('/agregarproducto')
        })
        .then(err => {console.log(err)})
    }


    return(
        <div className='container'>
            <div className='row' >                
                    <h2 className='mt-4'>Crear un nuevo Prodcuto</h2>                
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>   
                    <div className='mb-3'>
                        <label htmlFor="nombre" className='form-label'>Producto</label>
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

                    <button onClick={agreagarProducto} className='btn btn-success'>Guardar Producto</button>                
                </div>
            </div>
            
        </div>
    )

}
export default AgregarProducto