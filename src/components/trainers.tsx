import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FetchAllTrainersAsync } from '../redux/actions/actions';

export const Trainers: React.FC = () => {
  const users = useSelector((store: any) => store.trainers);
  useEffect(() => {
    FetchAllTrainersAsync();
  }, []);

  return (
    <>
      <h2>Meet our trainers</h2>
      <ul className="list-group">
        {Array.isArray(users) &&
          users.map((user: any) => (
            <li key={user.id} className="list-group-item">
              <Link to={`/trainers/${user.id}`}> {user.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
