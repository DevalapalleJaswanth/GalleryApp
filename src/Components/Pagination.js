import React, { useState, useEffect } from 'react';
export default function Pagination(props) {
  const { dataPerPage, data, setPageData } = props;
  const [numberOfPages, setNumberOfPages] = useState();
  const [prev, setPrev] = useState(0);
  console.log(props, numberOfPages);

  useEffect(() => {
    console.log(data);
    let temp =
      data &&
      data.filter((ele, i) => {
        if (i < dataPerPage) {
          return ele;
        }
      });
    setPageData([...temp]);
    let tempvalue = [];
    for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
      if (i === 1) {
        tempvalue.push({ value: i, clicked: true });
      } else {
        tempvalue.push({ value: i, clicked: false });
      }
    }

    setNumberOfPages([...tempvalue]);
  }, [data]);

  const handleClick = (value, i) => {
    let tempvalue = [...numberOfPages];
    tempvalue[prev].clicked = false;
    tempvalue[i].clicked = true;
    setPrev(i);
    setNumberOfPages([...tempvalue]);
    let temp =
      data &&
      data.filter((ele, i) => {
        if (i >= value * dataPerPage - dataPerPage && i < value * dataPerPage) {
          return ele;
        }
      });
    setPageData([...temp]);
  };
  return (
    <div>
      {numberOfPages &&
        numberOfPages.map((ele, i) => (
          <button
            key={i}
            onClick={() => {
              handleClick(ele.value, i);
            }}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: ele.clicked === true ? '#778899' : 'white',
              color: ele.clicked === true ? 'white' : '#778899',
              borderColor: '#778899',
              borderRadius: '0.3rem',
            }}
          >
            {ele.value}
          </button>
        ))}
    </div>
  );
}
