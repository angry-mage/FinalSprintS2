import React from 'react';
import './SubmitOrder.css'

function SubmitOrder() {
  const handleClick = () => {
    const messageDiv = document.getElementById('orderMessage');
    if (messageDiv) {
      messageDiv.innerHTML = "Your order has been submitted. Thanks for shopping with Rainforest!";
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <>
      <button className="submitButton" type="submit" onClick={handleClick}>Submit Order</button>
      <div id="orderMessage"></div> 
    </>
  );
}

export default SubmitOrder;