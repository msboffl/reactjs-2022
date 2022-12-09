import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const currSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', currSize);
  });
  return (
    <>
      <h1>UseEffect CleanUp</h1>
      <h2>Window Size</h2>
      <h3>{size} PX </h3>
    </>
  );
};

export default UseEffectCleanUp;
