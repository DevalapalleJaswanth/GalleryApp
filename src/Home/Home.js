import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { ImgCard } from '../Components';
import { GalleryContext } from '../Context';
export default function Home() {
  const myContext = useContext(GalleryContext);
  const { data } = myContext;
  console.log(data);
  return (
    <div>
      <div>{data && data.map((ele, i) => <ImgCard {...ele} />)}</div>
    </div>
  );
}
