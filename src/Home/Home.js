import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { ImgCard, Search } from '../Components';
import { GalleryContext } from '../Context';
import { useNavigate } from 'react-router';
export default function Home() {
  const myContext = useContext(GalleryContext);
  const { data, setData } = myContext;
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Search {...myContext} />
      </div>
      <br />
      <div>
        <Grid container spacing={2}>
          {data &&
            data.map((ele, i) => (
              <Grid
                item
                xs={6}
                md={3}
                lg={2}
                xl={2}
                key={i}
                onClick={() => {
                  navigate(`/Home/ImgDetails/${i}`);
                }}
              >
                <ImgCard {...ele} />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}
