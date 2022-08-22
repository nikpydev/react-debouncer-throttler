import React, { useState, useEffect } from 'react';

const DebouncerExample = () => {
  const [input, setInput] = useState('');

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const fetchData = () => {
    console.log('fetching data...');
  };

  useEffect(() => {
    const debounceFn = setTimeout(() => {
      if (input) {
        fetchData();
      }
    }, 3000);

    return () => {
      clearTimeout(debounceFn);
    };
  }, [input]);

  return (
    <>
      <input onChange={updateInput} value={input} />
    </>
  );
};

export default DebouncerExample;
