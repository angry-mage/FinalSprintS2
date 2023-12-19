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

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}