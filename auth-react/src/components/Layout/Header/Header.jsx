import React from 'react';
import Button from '../../ui/Button/Button';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header className="relative py-4 z-10 flex justify-between items-center">
      <NavBar />
      <div>
        <Button title="Login" />
        <Button title="Sign Up" />
      </div>
    </header>
  );
};

export default Header;
