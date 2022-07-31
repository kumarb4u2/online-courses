import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const Trainers: React.FC = () => {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <>
      <h2>Meet our trainers</h2>
      <ul className="list-group">
        {Array.isArray(users) &&
          users.map((user: any) => (
            <li key={user.id} className="list-group-item">
              <Link to={`/trainers/${user.id}`}> {user.login}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
