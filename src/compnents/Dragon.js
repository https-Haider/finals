// src/components/Dragons.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDragonsAsync } from '../features/dragonasync';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons.dragons);
  const status = useSelector((state) => state.dragons.status);
  const error = useSelector((state) => state.dragons.error);

  useEffect(() => {
    dispatch(fetchDragonsAsync());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Dragons</h2>
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>{dragon.name} {dragon.type} {dragon.imgs}</li>
        ))}
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Dragons;
