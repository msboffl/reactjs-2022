import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const resetCounter = () => {
    setCount(0);
  };
  return (
    <>
      <h2>Counter Example</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default Counter;
