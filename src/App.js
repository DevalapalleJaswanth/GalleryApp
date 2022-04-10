import React, { createContext, useEffect, useState } from 'react';
import Services from './Services';
import './style.css';

const context = createContext(); // Context is created.

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    let response = Services.getImages();
    setData({ ...response.data });
    console.log(data);
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
