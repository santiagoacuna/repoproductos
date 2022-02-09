import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="Nav">
      <ul className="ulList">
        <Link to="/" className="Link">
          Home</Link>
        <Link to="/about" className="Link">
          About</Link>
        <Link to="/contact" className="Link">
          Contact</Link>
        <Link to="/Category" className="Link">
          Mens´s Clothing</Link>
         </ul>
    </nav>
  );
};

export default NavBar;
