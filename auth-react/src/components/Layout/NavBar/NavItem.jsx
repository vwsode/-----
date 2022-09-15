import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ item }) => {
  return (
    <Link
      className="text-sm text-gray-400 font-medium hover:text-gray-100 hover:bg-gray-700 rounded-md px-3 py-2 transition-all duration-200"
      to={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavItem;
