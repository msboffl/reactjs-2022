import React, { useState, useEffect } from 'react';
const apiUrl = 'https://api.github.com/users/msboffl';

const MultipleReturn = () => {
  const [loading, setLoading] = useState(false);
  const [error, isError] = useState(false);
  const [user, setUser] = useState('Default User');

  useEffect(() => {
    setLoading(true)
    fetch(apiUrl)
      .then((res) => res.json())
      .then((user) => {
        // console.log(user);
        const { login: userName } = user;
        setUser(userName);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return (
      <>
        <h2>Error...</h2>
      </>
    );
  }
  return (
    <>
      <h2>{user}</h2>
    </>
  );
};

export default MultipleReturn;
