import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import { ImgCard, Search, Pagination } from '../Components';
import { GalleryContext } from '../Context';
import { useNavigate } from 'react-router';
export default function Home() {
  const myContext = useContext(GalleryContext);
  const { data, setData } = myContext;
  const navigate = useNavigate();
  const [pageData, setPageData] = useState();
  console.log(pageData);
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'sticky', top: '10px' }}>
        <Search {...myContext} />
      </div>
      <br />
      <div>
        <Grid container spacing={2}>
          {data &&
            pageData &&
            pageData.map((ele, i) => (
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

      <div
        style={{
          position: 'sticky',
          bottom: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Pagination dataPerPage={12} data={data} setPageData={setPageData} />
      </div>
    </div>
  );
}
