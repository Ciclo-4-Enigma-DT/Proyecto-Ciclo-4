import { act } from "react-dom/test-utils";
import { TYPES } from "../actions/shoppingActions";

export  const ShoppingInitialState={

    products:
    [
        {id:1,name:"producto 1",precio:100},
        {id:2,name:"producto 2",precio:200},
        {id:3,name:"producto 3",precio:300},
        {id:4,name:"producto 4",precio:400},
        {id:5,name:"producto 5",precio:500},
        {id:6,name:"producto 6",precio:600}
    ],
    cart:[]
}

export function shoppingReducer(state,action){

    switch (action.type) {
        
        case TYPES.ADD_TO_CART:{

            let new_item=state.products.find(product=> product.id === action.payload);

            console.log(new_item);

            let itemInCart=state.cart.find(item =>item.id===new_item.id);
            
            return itemInCart ? {
                    ...state,
                    cart:state.cart.map((item)=>item.id===new_item.id ? {...item,quantity:item.quantity+1}:item)

            }:
            {
                ...state,
                cart:[...state.cart,{...new_item,quantity:1}],
            };
          
        }
         
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item=> item.id===action.payload);

            return itemToDelete.quantity>1 ?
            {
                ...state,
                cart:state.cart.map((item)=>item.id === action.payload ?{...item,quantity:item.quantity-1}:item)
            }:{
                ...state,
                cart:state.cart.filter((item)=>item.id !==action.payload)
            };

        }
        
        case TYPES.REMOVE_ALL_FROM_CART:{
             return{
                ...state,
                cart:state.cart.filter((item)=>item.id !==action.payload)
             }   
        }

        case TYPES.CLEAR_CART:{
            return ShoppingInitialState;
        }

        default:
            return state;
    }
}