import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer'
import { CartContext } from '../contexts/CartContext'
import './Checkout.css'
import SubmitOrder from '../components/SubmitOrder';


const Checkout = () => {
  const  {total}  = useContext(CartContext)
  const location = useLocation();

  //This functions takes into account the subtotal amount and if it is greater than $250 the shipping will be free, otherwise the shipping will be $5.00. The .toFixed(2) at the end ensures that all dollar amounts will be printed with 2 decimal places. 

  const calculateShipping = (total) => {
    if (total > 250 || total == 0) {
      return (0.00).toFixed(2)
    } else {
      return (5).toFixed(2);
    };
  }

  const shipping = calculateShipping(total)
  const totCost = (parseFloat(total) + parseFloat(shipping)).toFixed(2);
  
  return (

    <>
      <h1 id='checkoutHeader'>Checkout</h1>
      <div className='checkoutSummaryBox'>
        <h2>Order Summary:</h2>
        <br />
        <p className="big">Subtotal: ${total}</p>
        <p className="big">Shipping: ${shipping}</p>
        <br />
        <h2>Total: ${totCost}</h2>
      </div>
      <div className="formBox"> 
      <form>
      <h2>Customer Information:</h2>
      
      <input  className="fullLine" type="text" placeholder="Name"></input>
      <input  className="halfLine" type="text" placeholder="Street Address"></input>
      <input className="halfLine" type="text" placeholder="City"></input>
      <input className="halfLine" type="text" placeholder="Province"></input>
      <input className="halfLine" type="text" placeholder="Postal Code"></input>
      <input className="fullLine" type="text" placeholder="Email Address"></input>
      </form>
      </div>
      <div className="formBox"> 
      <form>
      <h2>Payment Information:</h2>
      
      <input  className="fullLine" type="text" placeholder="Name on Card"></input>
      <input  className="fullLine" type="text" placeholder="Credit Card Number"></input>
      <input className="halfLine" type="text" placeholder="Exp"></input>
      <input className="halfLine" type="text" placeholder="CCV"></input>
      <input className="fullLine" type="text" placeholder="Address if different from shipping address"></input>
      </form>
      </div>

      <div id="center">
      <SubmitOrder />
      </div>
      <Footer />
    </>
  );
};


export default Checkout;