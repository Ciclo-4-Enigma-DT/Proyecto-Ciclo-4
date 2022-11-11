import axios from 'axios'
import React, {useEffect, useState} from 'react'
import ProductoIndividual from './ProductoIndividual'

function ListaProductos(){

    const[dataproductos, setdataproductos]=useState([])

    
    useEffect(() => {

        axios.get('api/producto/obtenerproducto').then(res => {
            console.log(res.data)
            setdataproductos(res.data)
        }).catch(err => {
            console.log(err)
        })
       
    },[])

    //Mapera listaproductos en objeto productos
    const listaproductos = dataproductos.map(producto => {
        return(
            <div>
                <ProductoIndividual producto={producto}/>
            </div>
        )
    })
        
    

    return(
        <div>
            <h2>Lista de Prodcutos</h2>
            {listaproductos}
        </div>
    )

}
export default ListaProductos