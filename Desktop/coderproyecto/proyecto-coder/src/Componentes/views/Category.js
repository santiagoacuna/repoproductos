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

let id = useParams();



useEffect(() => {
    axios(
      `https://fakestoreapi.com/products/category/${id.category_id}`).then((res) => 
        setUsers(res.data));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [id.category_id]);
  
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
  
  export default CategoryComponent;