import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ item }) => {
  return (
    <Link className="text-sm" to={item.path}>
      {item.title}
    </Link>
  );
};

export default NavItem;
