import React, { useState, useEffect } from 'react';
export default function Pagination(props) {
  //const [pageData,setPageData]=useState();
  const { dataPerPage, data, setPageData } = props;
  const [numberOfPages, setNumberOfPages] = useState();
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
    //console.log(temp);

    let tempvalue = [];
    for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
      tempvalue.push(i);
    }
    setNumberOfPages([...tempvalue]);
    //console.log(temp);
  }, [data]);

  const handleClick = (value) => {
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
        numberOfPages.map((value, i) => (
          <button
            key={i}
            onClick={() => {
              handleClick(value);
            }}
          >
            {value}
          </button>
        ))}
    </div>
  );
}
