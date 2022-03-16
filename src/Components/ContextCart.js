import React, {useContext} from 'react';
import {Scrollbars } from 'react-custom-scrollbars';
import Items from './Items';
import { CartContext } from './ShoppingCart';


const ContextCart = () => {
    const {Item, clearCart, totalItem, totalAmount} = useContext(CartContext);

    if(Item.length === 0) {
        return(<>
            <header>
                <div className='continue-shopping'>
                    <img src='' />
                    <h3>continue shopping</h3>
                </div>

                <div className='cart-icon'>

                    <img src='' alt='Cart'/>
                    <p>{totalItem}</p>
                </div>
            </header>

            <section className='main-cart-section'>
                <h1>shopping Cart</h1>
                <p className="toatal-items">
                 
                Available <span className='toatal-items-count'>{totalItem}</span> items in shopping cart
              </p>


              <div className='cart-items'>
                  <div className='cart-tems-container'>
                      <Scrollbars>
                       {Item.map((currentItem)=>  {
                        return <Items key= {currentItem.id}{...currentItem}/>
                       })}
                      </Scrollbars>
                  </div>
              </div>

              <div className='card-total'>
                <h3>
             cart Toatal : <span>{totalAmount}Rs</span>
            </h3>
              
        <button>checkout</button>
           <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
              </div>
          </section>

        </>
        )
    }
}
export default ContextCart;