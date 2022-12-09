import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>UseEffect Fetch Data</h2>
      <h1>Github Users</h1>
      <ul>
        {users.map((user) => {
          const { id, login: name, avatar_url, html_url: url } = user;
          return (
            <li key={id} className='user'>
              <img src={avatar_url} alt={name} className='avatar' />
              <div className='userName'>
                <h4>{name}</h4>
                <a href={url}>{url}</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetch;
