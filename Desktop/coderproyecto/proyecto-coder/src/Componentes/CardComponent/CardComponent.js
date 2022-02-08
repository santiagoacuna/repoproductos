import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardComponent.css';

export default function CardComponent({ data }) {
  return (
    <div className=''>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar</Button>
        <Button size="small">Quitar</Button>
      </CardActions>
    </Card>
    </div>
  );
}
