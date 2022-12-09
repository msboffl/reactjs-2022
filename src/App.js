import React from 'react';

// useState()
// import UseStateArray from './hooks/useState/UseStateArray';
// import UseStateBasic from './hooks/useState/UseStateBasic';
// import UseStateObject from './hooks/useState/UseStateObject';
// import Counter from './hooks/useState/Counter';

// useEffect()
// import UseEffectBasic from './hooks/useEffect/UseEffectBasic';
// import UseEffectCleanUp from './hooks/useEffect/UseEffectCleanUp';
// import UseEffectFetch from './hooks/useEffect/UseEffectFetch';
// import MultipleReturn from './hooks/conditionRendering/MultipleReturn';
import ShortCircuit from './hooks/conditionRendering/ShortCircuit';

import './index.css';

const App = () => {
  return (
    <div>
      {/* <----- Hooks -----> */}
      {/* <===== useState =====> */}
      {/* <UseStateBasic /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <Counter /> */}

      {/* <===== useEfect =====> */}
      {/* <UseEffectBasic /> */}
      {/* <UseEffectCleanUp /> */}
      {/* <UseEffectFetch /> */}

      {/* <===== Conditional Rendering =====> */}
      {/* <MultipleReturn /> */}
      <ShortCircuit />
    </div>
  );
};

export default App;
