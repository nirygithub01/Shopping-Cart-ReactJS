import React, {useContext} from 'react';
import { CartContext } from './ShoppingCart';


const Items = ({id, description, title, img, price, quantity}) => {
    const {removeItem, increament, decreament} = useContext(CartContext);

return (

    <>
        <div className='items-info'>
            <div className='product-img'>
                <img src= {img} alt="image"/>
            </div>

            <div className='title'>
           <h2>{title}</h2>
           <p>{description}</p>
            </div>

            <div className='add-minus-quantity'>
                <input type='text' placeholder= {quantity} disabled />
            </div>

            <div className='price'>
                <h3>{price}Rs</h3>
            </div>

            <div className='remove-item'></div>
        </div>
        <hr/>
    </>
);
};

export default Items;