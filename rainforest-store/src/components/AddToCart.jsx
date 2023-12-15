import React from 'react';
import "../pages/Description.css";
import addToCart from "../pageIcons/addToCart.png";

function AddToCart() {
    return (
      <button className='addToCartButton' type="submit" onClick={function handleClick() {
      alert("Item added to cart");
    }}><p id='addToCartText'>Add To Cart</p><img src={addToCart} alt="Add To Cart" id="addToCartImage"/></button>
    )
  };

export default AddToCart;