import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const TrainerDetails: React.FC = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState<any>({});
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((users) => setTrainer(users));
  }, [id]);

  return (
    <>
      <h2>Trainer Details of {trainer.name}</h2>
      <div>
        <h3>Name: {trainer.name}</h3>
        <img src={trainer.avatar_url} alt={trainer.name} height="100px" />
      </div>
    </>
  );
};
