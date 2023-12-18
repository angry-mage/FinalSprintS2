import React from 'react';
import "../pages/Description.css";
import addToCart from "../pageIcons/addToCart.png";


// Component to add a button to the product description that allows the item to be added to the cart

// DUMMY BUTTON, make sure to add code to fetch item data and write to cart page
function AddToCart() {
    return (
      <button className='addToCartButton' type="submit" onClick={function handleClick() {
      alert("Item added to cart");
    }}><p id='addToCartText'>Add To Cart</p><img src={addToCart} alt="Add To Cart" id="addToCartImage"/></button>
    )
  };

export default AddToCart;