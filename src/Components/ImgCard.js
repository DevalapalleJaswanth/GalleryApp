import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
export default function ImgCard({ id, url, title }) {
  return (
    <Card
      sx={{ maxWidth: 345, maxHeight: 345 }}
      style={{ position: 'relative' }}
    >
      <CardMedia component="img" height="345" image={url && url} alt={title} />
      <div style={{ position: 'absolute' }}>{title}</div>
    </Card>
  );
}
