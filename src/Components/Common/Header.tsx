import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AreaUtil from './AreaUtil';
import Nav from './Nav';
import { useRecoilValue } from 'recoil';
import { themeState } from './themeState';
import '../../assets/css/header.css';

const Header = (): JSX.Element => {
  const currentTheme = useRecoilValue(themeState);

  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const handelHamburgerClick = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div
      className={`${
        currentTheme === 'dark' ? 'header fixed z-10 w-full navbar shadow-lg dark:bg-neutral text-neutral-content' : 'header fixed z-10 w-full navbar shadow-lg bg-white text-neutral-content'
      }`}>
      <label htmlFor="side-menu" className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto" onClick={handelHamburgerClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-gray-700 dark:stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
      <div className="flex w-full xl:container xl:m-auto">
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
          <Link to="/" className="logo text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap">
            React Shop
          </Link>
        </h1>
        <Nav />
        <AreaUtil />
      </div>
    </div>
  );
};

export default Header;
