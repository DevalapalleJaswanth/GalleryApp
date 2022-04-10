import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Shimmer from 'react-shimmer-effect';
import { useParams, useNavigate } from 'react-router';
import { GalleryContext } from '../Context';
import './ImageDetails.css';
export default function ImageDetails() {
  const params = useParams();
  console.log(params);
  const myContext = useContext(GalleryContext);
  const { data } = myContext;
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")} className="button">
        Back
      </button>
      <br />
      <Card style={{ position: 'relative', maxWidth: '100%', height: '100%' }}>
        {data && params.id && (
          <>
            <CardMedia
              component="img"
              image={data[params.id].url && data[params.id].url}
              alt={data[params.id].title}
              width="100%"
              height="100%"
            />
            <div className="card-side">
              <br />
              <div>ID : {data[params.id].id}</div>
              <br />
              <div>Title : {data[params.id].title}</div>
              <br />
              <div>Source : {data[params.id].url}</div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
