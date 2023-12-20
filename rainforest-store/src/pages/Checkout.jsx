import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm'
import Footer from '../components/Footer'
import './Checkout.css'

const Checkout = () => {

  const location = useLocation();
  const total = location.state && location.state.total ? location.state.total : 0;

  return (
    <>
      <h1 id='checkoutHeader'>Checkout</h1>
      <div className='checkoutSummaryBox'>
        <p>Total ${total}</p>
      </div>
      
      <Footer />
    </>
  );
};



export default Checkout;