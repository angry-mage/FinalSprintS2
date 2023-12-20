import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {  
    setCartItems((currentItems) => [...currentItems, item]);
  };

  const removeFromCart = (itemId) => {    
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== itemId));  
  };

  const total = cartItems.reduce((total, item) => total += item.price, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
}