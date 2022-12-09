import React, { useState, useEffect } from 'react';

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'Hello World';
  const secondValue = text && 'Hello World';
  return (
    <>
      <h2>Short Circuit</h2>
      <h1>{firstValue}</h1>
      <h1>Value is: {secondValue}</h1>
    </>
  );
};

export default ShortCircuit;
