import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext/AuthContext';

const User = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="text-black">
      <div className="flex justify-between items-center">
        <h1 className="text-md font-medium">{user.email}</h1>
        <button
          onClick={handleLogout}
          className="py-2 px-5 border-[1px] hover:bg-gray-200 duration-200 transition-colors rounded-sm active:bg-gray-300"
        >
          LOGOUT
        </button>
      </div>
      <div>{user.uid}</div>
    </div>
  );
};

export default User;
