import React from 'react';
import './SubmitOrder.css'

//This component creates the submit order button on the checkout page. Once the button is pressed a message will be printed under the button confirming order submission.
function SubmitOrder() {
  const handleClick = () => {
    const messageDiv = document.getElementById('orderMessage');
    if (messageDiv) {
      messageDiv.innerHTML = "Your order has been submitted. Thanks for shopping with Rainforest!";
      //this will reload the page and clear both forms and the order confirmation message after 2 seconds. 
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