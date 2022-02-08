import React, { useEffect, useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import Spinner from '../Spinner';
import axios from 'axios';
import './ProductsComponent.css';
import { Link } from 'react-router-dom';

const ProductsComponent = () => {

const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(true);

/* Sin Axios */
/*  
useEffect(() => {
  fetch('https://fakestoreapi.com/products'),+
    .then((response) => response.json())
    .then((json) => setUsers(json));
}, []);*/

useEffect(() => {
  axios(
    `https://fakestoreapi.com/products`
  ).then((res) => setUsers(res.data));
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
}, []);

console.log(users);

return (
  <div className='productList'>
    {users.map((user) => {
      return (
        <div key={user.id}>
          
            {isLoading ? <Spinner /> :
              <Link to={`/detail/${user.user_id}`} className=''>
                <CardComponent data={user} key={user.id} />
                </Link>}
          
        </div>
      );
    })}
  </div>
);
};

export default ProductsComponent;