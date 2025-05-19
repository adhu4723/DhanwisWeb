import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 bg-white ">
      <div className="flex items-center space-x-2">
        <span className="text-yellow-500 font-bold text-lg">Dhan<span className="text-gray-800 font-semibold text-lg">wis</span></span>
       
        <span className="ml-4 text-xs text-gray-500">© 2020 Dhanwis. All rights reserved.</span>
      </div>
      <div className="flex space-x-6 mt-2 md:mt-0 text-indigo-900 font-medium">
        <Link to={'/'}>Home</Link>
        <Link to={'aboutus'}>About Us </Link>
        <Link to={'ourworks'}>Our Work</Link>
        <Link to={'contactus'}>Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
