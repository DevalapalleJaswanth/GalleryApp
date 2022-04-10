import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { ImgCard } from '../Components';
export default function Home() {
  const context = useContext();
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {context &&
        context.map((ele, i) => (
          <Grid item xs={6} key={i}>
            <ImgCard id={ele.id} title={ele.title} url={ele.url} />
          </Grid>
        ))}
    </Grid>
  );
}
