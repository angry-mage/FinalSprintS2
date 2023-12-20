import React, { useState } from 'react';
import '../pages/Checkout.css';

function CheckoutForm({ prompt }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form>
        <input
          className="formInput"
          type="text"
          placeholder={prompt}
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default CheckoutForm;

