import { render, screen } from "@testing-library/react";
import Checkout from "../pages/Checkout";
import { CartContext } from "../contexts/CartContext";

describe("Checkout testing", () => { 
  test("renders heading", () => {
    render(
    <CartContext.Provider value={{ total: "100.00" }}>
      <Checkout />
    </CartContext.Provider>
  );
    const checkoutHeader = screen.getByText(/checkout/i);
    expect(checkoutHeader).toBeInTheDocument();
  });

  test("renders form input", () => {
  render(
    <CartContext.Provider value={{ total: "100.00" }}>
      <Checkout />
    </CartContext.Provider>
  );
  const inputElement1 = screen.getByPlaceholderText("Name");
  expect(inputElement1).toBeInTheDocument();

  const inputElement2 = screen.getByPlaceholderText("Street Address");
  expect(inputElement2).toBeInTheDocument();

  const inputElement3 = screen.getByPlaceholderText("City");
  expect(inputElement3).toBeInTheDocument();

  const inputElement4 = screen.getByPlaceholderText("Province");
  expect(inputElement4).toBeInTheDocument();

  const inputElement5 = screen.getByPlaceholderText("Postal Code");
  expect(inputElement5).toBeInTheDocument();

  const inputElement6 = screen.getByPlaceholderText("Email Address");
  expect(inputElement6).toBeInTheDocument();

});

  test("shipping $5.00 is the total from the CartContext is $100.00", () => {
    render(
      <CartContext.Provider value={{ total: "100.00" }}>
        <Checkout />
      </CartContext.Provider>
    );
    const shipping = screen.getByText(/Shipping: \$5.00/i);
    expect(shipping).toBeInTheDocument;
  })
    test("shipping $0.00 is the total from the CartContext is $300.00", () => {
      render(
        <CartContext.Provider value={{ total: "300.00" }}>
          <Checkout />
        </CartContext.Provider>
      );
      const shipping = screen.getByText(/Shipping: \$0.00/i);
      expect(shipping).toBeInTheDocument;
    })
})