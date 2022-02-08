import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


const ProductDetail = () => {
	const [users, setUsers] = useState([]);


	let id = useParams();

	let userID = id.id;

	console.log(userID);

	useEffect(() => {
		axios(`https://fakestoreapi.com/products/${userID}`).then((res) =>
		setUsers(res.data)
		);
	}, [userID]);

	return (

		<div className=''>
		<Card sx={{ maxWidth: 345 }}>
		  <CardMedia
			component="img"
			height="140"
			image={users.image}
			alt="foto producto"
		  />
		  <CardContent>
			<Typography gutterBottom variant="h5" component="div">
			  {users.title}
			</Typography>
			<Typography variant="body2" color="text.secondary">
			  {users.price}
			</Typography>
		  </CardContent>
		  <CardActions>
			<Button size="small">Agregar</Button>
			<Button size="small">Quitar</Button>
		  </CardActions>
		</Card>
		</div>
	  );

};


export default ProductDetail;