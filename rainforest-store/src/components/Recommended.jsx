import useFetch from "../hooks/useFetch";
import React from 'react';
import "./Recommended.css";
import {Link} from "react-router-dom";
import Footer from "../components/Footer"

const Recommended = () => {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

  if (loading) {
    return <div>Loading......</div>;
  }
  if (error) {
    return <div> Error: {error.message}</div>;
  }

//This function will get 3 random items from the API, the 0.5-Math.random produces a random order of the array of items so a different 3 will be produced every time the page is loaded. The random.slice(0, count) will make sure the first 3 items in the newly randomized array will be sliced and added to the component. 

  let getRandomItems = (items, count) => {
    const random = [...items].sort(() => 0.5 - Math.random());
    return random.slice(0, count);
  }

  const randomItems = getRandomItems(data, 3);

  return (
    <div id="box1">
    <h3 id="title">We also recommend:</h3>
      {randomItems.map((item) => ( 
        <div className="recBox">         
         <img src={item.image} alt={item.title} width="50%"/>
         <Link to={`/description/${item.id}`}><p>{item.title}</p></Link>
          <p>${item.price}</p>
        </div>
    ))}
    </div>
  )};
<Footer />


export default Recommended;