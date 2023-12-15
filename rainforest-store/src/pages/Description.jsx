import useFetch from "../hooks/useFetch";
import {useParams} from "react-router-dom";
import AddToCart from "../components/AddToCart";
import './Description.css'
import Recommended from "../components/Recommended"
import Footer from "../components/Footer"

//When an item is clicked in the Products.jsx page this page will then open. useParams was imported from the React Router library to ensure that the item ID could be used to fetch the data for that particular item in the API used in the useFetch hook.  The styling for this page can be found on the Description.css page. 
const Description = () => {
  const {id} = useParams();
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

  if (loading) {
    return <div>Loading......</div>;
  }
  if (error) {
    return <div> Error: {error.message}</div>;
  }
  const item = data.find((item) => item.id.toString() === id);

  return (
      <>
        <div className="description-container">
          <div className="desBox">         
            <span><img id="desImg" src={item.image} alt={item.title} />
            </span>
            <span id="des">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p></span>
          </div> 
          <div>
            <AddToCart />
          </div>
          
        </div>
        <Recommended />
        <Footer />
        </>
  )};
  
export default Description;