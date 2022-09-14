import React from 'react';
import { NAV_DATA } from '../../../data/data-nav';
import NavItem from './NavItem';

const NavBar = () => {
  return (
    <div>
      <ul className="list-none flex gap-4">
        {NAV_DATA.map((link) => (
          <li className=" " key={link.id}>
            <NavItem item={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
