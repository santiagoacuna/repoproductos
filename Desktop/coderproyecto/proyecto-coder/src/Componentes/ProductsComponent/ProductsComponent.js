import React, { useEffect, useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import Spinner from '../Spinner';
import axios from 'axios';
import './ProductsComponent.css';
import { Link } from 'react-router-dom';

const ProductsComponent = () => {

const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  axios(
    `https://fakestoreapi.com/products`).then((res) => 
      setUsers(res.data));
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
}, []);

return (
  <div className='productList'>
    {users.map((use) => {
      return (
        <div key={use.id}>
          
            {isLoading ? <Spinner /> :
              <Link to={`/detail/${use.id}`} className=''>
                <CardComponent data={use}/>
                </Link>}
          
        </div>
      );
    })}
  </div>
);
};

export default ProductsComponent;