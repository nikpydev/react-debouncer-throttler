import React, { useState, useEffect } from 'react';

let flag = true;

const ThrottlerExample = () => {
  const [input, setInput] = useState('');

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const fetchData = () => {
    console.log('fetching data...');
  };

  useEffect(() => {
    if (input && flag) {
      fetchData();
      flag = false;

      setTimeout(() => {
        flag = true;
      }, 3000);
    }
  }, [input]);

  return (
    <>
      <input onChange={updateInput} value={input} />
    </>
  );
};

export default ThrottlerExample;
