import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products";
import Description from "./pages/Description";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "./contexts/CartContext";

//BrowserRouter added to create the 4 pages.  Note, the path to the Descriptions page has :id addded to make sure the id of each item is taken into account when opening the description page. 

export default function Main() {
  return (
    //wrapping the BrowserRouter in the CartProvider allowed for the CartContext to be used throughout the app. 
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Products />} />
            <Route path="description/:id" element={<Description />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
