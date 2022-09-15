import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext/AuthContext';

const User = () => {
  const { logOut, user } = useAuth();

  return (
    <div className="text-inherit">
      <div className="flex justify-between items-center">
        <h1 className="text-md font-medium">{user.email}</h1>
      </div>
      <div>{user.uid}</div>
    </div>
  );
};

export default User;
