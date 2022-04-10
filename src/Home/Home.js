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
      <Grid container spacing={2}>
        {data &&
          data.map((ele, i) => (
            <Grid item xs={6} md={3} lg={2} xl={2}>
              <ImgCard {...ele} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
