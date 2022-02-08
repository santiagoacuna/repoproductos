import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import CardComponent from '../../Componentes/CardComponent/CardComponent';

const ProductDetail = () => {
	const [users, setUsers] = useState([]);

	console.log(users);

	let id = useParams();

	let userID = id.id;

	console.log(userID);

	useEffect(() => {
		axios(`https://fakestoreapi.com/products'${userID}`).then((res) =>
		setUsers(res.data)
		);
	}, [userID]);

	return (
		<div className='CharacterList-detail'>
			{users.map((use) => {
				return (
					<div key={use.id}>
						<CardComponent data={use} />
					</div>
				);
			})}
		</div>
	);
};

export default ProductDetail;