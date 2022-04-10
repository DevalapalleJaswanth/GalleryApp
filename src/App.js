import React, { createContext, useEffect, useState } from 'react';
import Services from './Services';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

const GalleryContext = createContext(); // Context is created.

export default function App() {
  const [data, setData] = useState();

  async function getData() {
    let response = await Services.getImages();
    if (response.photo) {
      let temp = response.photo.map((ele, i) => {
        return {
          ...ele,
          url: `https://farm${ele.farm}.staticflickr.com/${ele.server}/${ele.id}_${ele.secret}.jpg`,
        };
      });
      setData([...temp]);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <GalleryContext.Provider value={data}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ImgDetails" element={<></>} />
          </Routes>
        </BrowserRouter>
      </GalleryContext.Provider>
    </div>
  );
}
