import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./NavBar.css"


const NavBar = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios(
      `https://fakestoreapi.com/products/categories`).then((res) => 
        setUsers(res.data));
  }, []);

  return (
  
    <nav className="Nav">
        <ul className="ulList">
          <Link to="/" className="Link">
            Home</Link>
          <Link to="/about" className="Link">
            About</Link>
          <Link to="/contact" className="Link">
            Contact</Link>
            {users.map((use) =>                  
              <Link key={use} to={`/category/${use}`} className=''>
                {use}
              </Link>
            
          )}
        </ul>
    </nav>
  );
};

export default NavBar;


