import React, { useState } from 'react';
import { dummyData } from '../dummyData';

const UseStateArray = () => {
  const [people, setPeople] = useState(dummyData);
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      <h2>UseStateArray Example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <p>
              {name}
              <button onClick={() => removePerson(id)}>Remove</button>
            </p>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>Clear Names</button>
    </>
  );
};

export default UseStateArray;
