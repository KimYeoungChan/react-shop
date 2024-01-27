import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/drawer.css';

// TODO : 리스트 버튼 클릭시 remove 구현
const Drawer = (): JSX.Element => {
  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100 drawer-menu">
        <li>
          <Link to="/fashion" className="!text-gray-700 active:!text-white dark:!text-white drawer-text">
            패션
          </Link>
        </li>
        <li>
          <Link to="/accessory" className="!text-gray-700 active:!text-white dark:!text-white drawer-text">
            액세서리
          </Link>
        </li>
        <li>
          <Link to="/digital" className="!text-gray-700 active:!text-white dark:!text-white drawer-text">
            디지털
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
