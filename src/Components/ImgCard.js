import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Shimmer from 'react-shimmer-effect';
import './ImgCard.css';
export default function ImgCard({ id, url, title }) {
  return (
    <Shimmer>
      <Card sx={{ maxWidth: 345, height: 300 }} className="card">
        {url && (
          <>
            <CardMedia
              component="img"
              width="345"
              height="300"
              image={url && url}
              alt={title}
            />

            <div className="footer">{title}</div>
          </>
        )}
      </Card>
    </Shimmer>
  );
}
