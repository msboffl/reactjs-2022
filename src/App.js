import React from 'react';

// useState()
// import UseStateArray from './hooks/useState/UseStateArray';
// import UseStateBasic from './hooks/useState/UseStateBasic';
// import UseStateObject from './hooks/useState/UseStateObject';
import Counter from './hooks/useState/Counter';
import './index.css';

const App = () => {
  return (
    <div>
      {/* <UseStateBasic /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      <Counter />
    </div>
  );
};

export default App;
