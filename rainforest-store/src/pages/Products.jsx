import useFetch from "../hooks/useFetch";
import './Products.css';
import {Link} from "react-router-dom";

//The useFetch hook is import above and used in this function to fetch the information from a fake API that was found on GitHub(https://github.com/keikaavousi/fake-store-api). While the page is loading the products the 'Loading...' message will appear and if there are any errors with the API loading an error message will appear. 

const Products = () => {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

  if (loading) {
    return <div>Loading......</div>;
  }
  if (error) {
    return <div> Error: {error.message}</div>;
  }
// Once loaded this functions will return all items found in the API using the map method. The useFetch hook will fetch the id, image, and title of each item and display them each in a div. The styling for this page can be found in the Products.css page. 

//The Link tag used here was imported from React Router at the top of this page. If any part of the div containing each item is clicked it will bring you to the Description page for that individual item. 

  return (
    <div className="box1">
      {data.map((item) => (
        <Link to={`/description/${item.id}`}>
          <div key={item.id} className="productBox">         
          <img src={item.image} alt={item.title} width="50%" height="50%"/>
          <h4 id="title">{item.title}</h4>
          <p>${item.price}</p>
        </div></Link>
      ))}
    </div>
  )};

export default Products;