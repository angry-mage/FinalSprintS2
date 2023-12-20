import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom';
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
               <span id="priceSpan"> Price: ${item.price.toFixed(2)}</span>
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
      
      <div className='subtotalBox'>
        <span id='subtotal'>Subtotal: </span>
        <span id='subtotalPrice'>${total}</span>
      </div>

      <div className='buttonBox'>
        <Link to='/'>
          <button id='continueShoppingButton'>
            <p id='continueShoppingText'>Continue Shopping</p>
          </button>
        </Link>

        <Link to='/checkout'>
          <button id='checkoutButton'>
            <p id='checkoutText'>Checkout</p>
          </button>
        </Link>
              
      </div>
  
      <Footer />
    </>
  );
 
};
 
export default Cart;