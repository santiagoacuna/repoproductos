import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import CardComponent from '../CardComponent/CardComponent';
import Spinner from '../Spinner';
import axios from 'axios';
import '../ProductsComponent/ProductsComponent.css';
import { Link } from 'react-router-dom';

const CategoryComponent = () => {

const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(true);
let category = useParams();


useEffect(() => {
  axios(
    `https://fakestoreapi.com/products/category/${category.category_id}`).then((res) => 
      setUsers(res.data));
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
}, [category.category_id]);

return (
  <div className='productList'>
    {users.map((use) => {
      return (
        <div key={use.id}>
          
            {isLoading ? <Spinner /> :
              <Link to={`/category/${use.category_id}`} className=''>
                <CardComponent data={use}/>
                </Link>}
          
        </div>
      );
    })}
  </div>
);
};

export default CategoryComponent;