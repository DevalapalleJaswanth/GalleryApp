import React, { createContext, useEffect, useState } from 'react';
import Services from './Services';
import './style.css';

const context = createContext(); // Context is created.

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
      {console.log(data)}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <img src={data && data[0].url} />
    </div>
  );
}
