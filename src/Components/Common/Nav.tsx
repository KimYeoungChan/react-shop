import React from 'react';
import { Link } from 'react-router-dom';
import { MENUS } from '../../Constants/category';
import '../../assets/css/header.css';

const Nav = (): JSX.Element => {
  return (
    <div className="flex-none hidden md:flex md:flex-1 ml-2">
      {Object.entries(MENUS).map(([key, value]) => (
        <Link key={key} to={`/${key}`} className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white menu">
          {value}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
