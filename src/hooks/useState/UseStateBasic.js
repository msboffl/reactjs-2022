import React, { useState } from 'react';

const UseStateBasic = () => {
  //   console.log(useState('Hello World'));
  //   const value = useState(1)[0];
  //   const handler = useState(1)[1];
  //   console.log(value, handler);
  const [text, setText] = useState('Random Title');
  const changeTitle = () => {
    if (text === 'Random Title') {
      setText('Hello World');
    } else {
      setText('Random Title');
    }
  };
  return (
    <React.Fragment>
      <h2>useState Basic Example</h2>
      <h1>{text}</h1>
      <button onClick={changeTitle}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasic;
