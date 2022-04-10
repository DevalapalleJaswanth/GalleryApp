import React, { useSate } from 'react';
import { GalleryContext } from './Context';
import Services from '../Services';
import TextField from '@mui/material/TextField';
export default function Search({ setData }) {
  const handleChange = async (e) => {
    let response = await Services.getImages(e.target.value);
    if (response.photo) {
      let temp = response.photo.map((ele, i) => {
        return {
          ...ele,
          url: `https://farm${ele.farm}.staticflickr.com/${ele.server}/${ele.id}_${ele.secret}.jpg`,
        };
      });
      setData([...temp]);
    }
  };
  return (
    <div>
      <TextField
        fullWidth
        label="Search"
        id="Search"
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}
