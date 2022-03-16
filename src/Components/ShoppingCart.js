import React, {createContext, useReducer, useEffect} from 'react';
import './ShoppingCart.css';
import {products} from './Product';
import ContextCart from './ContextCart';

import {reducer} from './reducer';


export const CartContext = createContext() ;

const initialState = {
    item: products, 
    totalAmount: 0,
    totalItem:0,
};


const Cart = () => {
    //const [item, setItem] = useState(products);
    const [state, dispatch] = useReducer(reducer, initialState);

    //to delete the individual elements from an Item Cart

    const removeItem = (id) => {
        return dispatch ({
            type:"REMOVE_ITEM",
            payload:id,
        });
    };


//clear the cart 
const clearCart = () => {
    return dispatch({type:"CLEAR_CART"});
};


//Increament the item
const increament = (id) => {
    return dispatch({
        type : "INCREAMENT",
        payload:id,
    });
};

//decreament the item 

const decreament = (id) => {
    return dispatch({
        type: "DECREAMENT",
        payload: id,
    });
};

//Using of useEffect to Update the Data

useEffect (() => {
    dispatch({type: "GET_TOTAL"});

}, [state.item]);

return (
    
    <CartContext.Provider 
    value={{...state, removeItem, clearCart, increament, decreament}}>
    <ContextCart />
    </CartContext.Provider>
    
);
}
export default Cart;
