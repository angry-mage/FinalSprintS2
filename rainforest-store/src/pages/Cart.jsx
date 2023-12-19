import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'
import Footer from '../components/Footer'
// import './Cart.css'
 
const Cart = () => {
  const { cartItems, removeFromCart, total } = useContext(CartContext);
  
  return (
    <>
      <h1 id="cartHeader">Your Cart</h1>
      <div className="cartItems">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
               <img src={item.image} alt={item.name} width="50px" height="50px" />
               <span> {item.name}</span>
               <span> {item.price}</span>
               <button onClick={() => removeFromCart(item.id)}>
                  Remove
               </button>
               </li>
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