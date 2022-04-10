import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Shimmer from 'react-shimmer-effect';
import { useParams, useNavigate } from 'react-router';
import { GalleryContext } from '../Context';
import './ImageDetails.css';
export default function ImageDetails() {
  const [result, setResult] = useState();
  const params = useParams();

  const myContext = useContext(GalleryContext);
  const { data } = myContext;
  const navigate = useNavigate();
  useEffect(() => {
    let temp =
      data &&
      params.id &&
      data.filter((ele, i) => {
        if (ele.id === params.id) {
          return ele;
        }
      });
    setResult({ ...temp[0] });
  }, [data]);

  return (
    <div>
      <button onClick={() => navigate('/')} className="button">
        Back
      </button>
      <br />
      <Card style={{ position: 'relative', maxWidth: '100%', height: '100%' }}>
        {data && params.id && result != {} && (
          <>
            <CardMedia
              component="img"
              image={result && result.url}
              alt={result && result.title}
              width="100%"
              height="100%"
            />
            <div className="card-side">
              <br />
              <div>ID : {result && result.id}</div>
              <br />
              <div>Title : {result && result.title}</div>
              <br />
              <div>Source : {result && result.url}</div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
