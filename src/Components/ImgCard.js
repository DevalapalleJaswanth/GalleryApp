import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './ImgCard.css';
export default function ImgCard({ id, url, title }) {
  const [display, setDisplay] = useState('none');
  console.log(display);
  return (
    <Card sx={{ maxWidth: 345, height: 300 }} className="card">
      <CardMedia
        component="img"
        width="345"
        height="300"
        image={url && url}
        alt={title}
      />
      <div className="footer">{title}</div>
    </Card>
  );
}
