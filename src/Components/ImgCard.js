import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
export default function ImgCard({ id, url, title }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={url && url} alt={title} />
      <div>{title}</div>
    </Card>
  );
}
