import './App.css';
import { Outlet, Link} from "react-router-dom";
import './index';

function App() {
  return (
    <>
    <header>
      <img src="../images/logo.png" className="headLogo" alt="Rainforest Logo" width="400px"/>
    <nav>
      <Link to="/" className="nav-link"><img src="../images/home.png" alt="Home" width="50px"/> </Link>
      <Link to="/cart" className="nav-link"><img src="../images/cart.png" alt="Cart" height="67px" /></Link>
    </nav>
    </header>
    <Outlet />
</>
);
}

export default App;