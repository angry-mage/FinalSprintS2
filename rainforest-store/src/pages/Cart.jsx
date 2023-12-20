import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'
import Footer from '../components/Footer'
import './Cart.css'
 
const Cart = () => {  
  const { cartItems, removeFromCart } = useContext(CartContext);
  
  const total = cartItems.reduce((total, item) => total += item.price, 0).toFixed(2);

  return (
    <>
      <h1 id="cartHeader">Your Cart</h1>
      <div className="cartItems">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <div className="cartItemBox" key={item.id}>
               <span><img src={item.image} alt={item.title} id="itemImage"/></span>
               <span id="titleSpan"> {item.title}</span>
               <span id="priceSpan"> ${item.price.toFixed(2)}</span>
               <img
                  src="../images/ClearShoppingCart.png"
                  alt="Remove From Cart"
                  onClick={() => removeFromCart(item.id)}
                  id="removeCartButton"
                />
              </div>
            ))}
          </ul>
        )}
      </div>
      
      <div>Total: {total} </div>
  
      <Footer />
    </>
  );
 
};
 
export default Cart;