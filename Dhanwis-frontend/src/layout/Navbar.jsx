import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHeadphonesAlt, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-yellow-500 font-semibold' : 'text-white';

  return (
    <nav className=" shadow-md px-6 py-2  mb- bg-gray-900 z-2">
      <div className="flex justify-between items-center">
        <Link to={'/'}>
      <img width={100} src="public/logo/Dhanwis Logo-01 (1).png" alt="" />
</Link>
        {/* Desktop menu */}
        <div className="hidden lg:flex gap-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/aboutus" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/ourworks" className={navLinkClass}>Our Work</NavLink>
          <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
        </div>

        {/* Right button (always visible) */}
        <div className="hidden lg:flex">
          <Link to={'/contactus'} className="bg-yellow-500 flex gap-2 items-center text-white py-2 px-4 rounded hover:bg-yellow-500">
            <FaHeadphonesAlt /> Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl text-yellow-600" />
            ) : (
              <FaBars className="text-2xl text-yellow-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 lg:hidden">
          <NavLink to="/" onClick={closeMenu} className={navLinkClass}>Home</NavLink>
          <NavLink to="/aboutus" onClick={closeMenu} className={navLinkClass}>About Us</NavLink>
          <NavLink to="/ourworks" onClick={closeMenu} className={navLinkClass}>Our Work</NavLink>
          <NavLink to="/careers" onClick={closeMenu} className={navLinkClass}>Careers</NavLink>
          <NavLink to="/blog" onClick={closeMenu} className={navLinkClass}>Blog</NavLink>
          <Link to={'/contactus'} onClick={closeMenu} className="bg-yellow-600 w-fit flex gap-2 items-center text-white py-2 px-4 rounded hover:bg-yellow-500">
            <FaHeadphonesAlt /> Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
