import React, { useSate } from 'react';
import { GalleryContext } from './Context';
import Services from '../Services';
import TextField from '@mui/material/TextField';
import './Search.css';
export default function Search({ setData }) {
  const handleChange = async (e) => {
    let search = e.target.value !== '' ? e.target.value : 'human';
    let response = await Services.getImages(search);
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
    <div className="center">
      <TextField
        xs={12}
        sm={8}
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
