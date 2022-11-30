import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'Mareedu Saibabu',
  //   age: 24,
  //   message: 'How are you!',
  // });
  //   console.log(person);

  const [name, setName] = useState('Saibabu');
  const [age, setAge] = useState(23);
  const [message, setMessage] = useState('How are You.?');

  const changeMessage = () => {
    // if (person.message === 'How are you!') {
    //   setPerson({ ...person, message: "I'm Fine, What about you.?" });
    // } else {
    //   setPerson({ ...person, message: 'How are you!' });
    // }
    setName('Mahesh');
    setAge(24);
    setMessage("I'm Fine Saibabu");
  };
  return (
    <>
      <h1>UseStateObject Example</h1>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
