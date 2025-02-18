import { createContext, useContext } from "react";

export const ProductContext = createContext({})
export  const initialState = {
    cart:[],
    wishlist:[],

};
 export const reducer= (state, action)=> {
    switch(action.type){
        case "ADD_TO_CART":
            if(state.cart.some(item=> item.id ===action.payload.id)){
                alert("Item already in cart");
                return state;
            }else{
          return {...state, cart:[...state.cart,  action.payload]};  
            };
            
        case "REMOVE_FROM_CART":
            return {...state,cart: state.cart.filter((item)=>item.id !== action.payload)};
            case "ADD_TO_WISHLIST":
                if(state.wishlist.some(item=>item.id === action.payload.id)){
                     alert ("Item already in wishlist");
return state;
                }else{
                return {...state, wishlist: [...state.wishlist, action.payload]};
                }
            case "REMOVE_FROM_WISHLIST":
                return {...state, wishlist:[...state.wishlist.filter((item)=>item.id !==action.payload)]};
        case "INCREASE_QUANTITY":
            return{...state, cart:[...state.cart.map((item)=>item.id ===action.payload.id? {...item, quantity:item.quantity+1}:item)]};
        default:
            return state;
    }
 }

 export const  useProductState = () => useContext(ProductContext);


