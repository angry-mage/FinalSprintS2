import React, { useContext } from 'react';
import {CartContext} from '../contexts/CartContext';
import "../pages/Description.css";

// Component to add a button to the product description that allows the item to be added to the cart


const AddToCart = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };
    
    return (
      <button className='addToCartButton' onClick={handleAddToCart}>
        <p id='addToCartText'>Add To Cart</p><img src={"../images/AddCart.png"} alt="Add To Cart" id="addToCartImage"/>    
      </button>
    )
  };

export default AddToCart;