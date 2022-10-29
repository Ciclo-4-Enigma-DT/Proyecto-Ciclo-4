import React from 'react'

const CartIem = ({data,delFromCart}) => {
    let{id,name,precio,quantity}=data;
  return (
    <div style={{borderBottom:"thin solid gray"}}>
        <h4>Nombre del producto:{name}</h4>
        <h5>Precio:${precio}.00</h5>
        <h6>Cantidad:{quantity}</h6>
        <button onClick={()=>delFromCart(id)}> Eliminar 1</button>
        <br></br>
        <button onClick={()=>delFromCart(id,true)}> Eliminar todos</button>
    </div>
  )
}

export default CartIem