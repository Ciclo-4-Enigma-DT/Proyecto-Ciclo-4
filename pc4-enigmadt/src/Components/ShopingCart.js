import React, { useReducer } from 'react'
import { TYPES } from '../actions/shoppingActions';
import { ShoppingInitialState, shoppingReducer } from '../reducers/shoppingReducers'
import CartIem from './CartIem';
import ProductItem from './ProductItem';

const ShopingCart = () => {
    
    
    const [state, dispatch] = useReducer(shoppingReducer,ShoppingInitialState);
    
    const {products,cart}=state;
  
    const addToCart=(id)=>{
        console.log(id);
        dispatch({type:TYPES.ADD_TO_CART, payload:id});
    }

    const delFromCart=(id,all=false)=>{
        console.log(id,all);
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
        }
        else{
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})
        }
    }

    const clearCart=()=>{

        dispatch({type:TYPES.CLEAR_CART})
    }
  
    return (
    <div>
    <h2>Carrito de compras</h2>
    <h3>Productos</h3>
    <article className='box grid-responsive'>
        {products.map((products)=> <ProductItem key={products.id} 
        data={products} addToCart={addToCart}></ProductItem>)}
    </article>
     <h3>Carrito</h3>
   
    <article className='box'>
        <button onClick={clearCart}>Limpiar Carrito</button>
        {
        cart.map((item,index)=> (<CartIem key={index}
        data={item} delFromCart={delFromCart}></CartIem>))
        }
    
    </article>
    
    
    </div>
  )
}

export default ShopingCart