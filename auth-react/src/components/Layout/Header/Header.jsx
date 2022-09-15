import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext/AuthContext';
import Logo from '../../ui/Logo/Logo';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  const { user } = useAuth();
  return (
    <header className="relative py-4 z-10 flex justify-between items-center">
      <Logo />
      <NavBar />
      <div className="text-sm flex items-center gap-4">
        {user ? (
          <>
            <button onClick={handleLogout} className="rounded-sm px-3 py-2">
              Logout
            </button>
            <Link className="rounded-sm bg-gray-600 px-3 py-2" to="user">
              Account
            </Link>
          </>
        ) : (
          <>
            <Link className="rounded-sm px-3 py-2" to="login">
              Login
            </Link>
            <Link className="rounded-sm bg-red-600 px-3 py-2" to="signup">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
