import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="absolute w-full">
      <div className="flex py-3 text-xs md:text-base space-x-3 justify-center items-center text-gray-500 dark:bg-darkBlue-900 dark:text-darkBlue-300">
        <span>Copyright &copy; 2022 </span>
        <Link
          to="/"
          className="font-bold text-transparent bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text animate-pulse"
        >
          AT
        </Link>
        <span>|</span>
        <span> All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
