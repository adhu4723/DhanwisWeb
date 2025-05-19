import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbHeader = () => {
  const location = useLocation();
  const rawPath = location.pathname.replace('/', '') || 'shop';

  // Define custom name mappings
  const pathMap = {
    aboutus: 'About Us',
    ourworks: 'Our Work',
    shop: 'Shop',
    contactus:'Contact Us'
  };

  // Get the formatted path name from map or capitalize default
  const formattedPath = pathMap[rawPath.toLowerCase()] || rawPath.charAt(0).toUpperCase() + rawPath.slice(1);

  return (
    <div
      className="relative w-full h-[150px]  lg:h-[250px] bg-cover bg-center flex items-end p-4"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)),
          url(https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
        `,
      }}
    >
      <div className="p-4 border-l-4 border-yellow-600 text-white">
        <h1 className="lg:text-4xl text-2xl uppercase font-semibold mb-2">{formattedPath}</h1>
        <div className="text-sm flex items-center space-x-1">
          <Link to={'/'} className="hover:underline text-gray-200">Home</Link>
          <span className="mx-1">{'>'}</span>
          <span className="capitalize">{formattedPath}</span>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
