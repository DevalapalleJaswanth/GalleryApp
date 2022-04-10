import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { ImgCard } from '../Components';
import { GalleryContext } from '../Context';
export default function Home() {
  const myContext = useContext(GalleryContext);
  const { data } = myContext;
  return (
    <div>
      {console.log(data)}
      <div>
        <img src={data && data[0].url} />
        <Grid />
      </div>
    </div>
  );
}
