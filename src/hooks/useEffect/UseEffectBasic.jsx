import React, { useState, useEffect } from 'react';

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const title = 'New Messages';
    document.title = title + `(${value})`;
    console.log('Called useEffect');
  });
  console.log('Rendered Component');
  return (
    <>
      <h2>UseEffect Basics</h2>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
    </>
  );
};

export default UseEffectBasic;
