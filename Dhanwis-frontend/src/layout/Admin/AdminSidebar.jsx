import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  User,
  Settings,
  Boxes,
  ShoppingBag,
} from 'lucide-react';

const navItems = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/addportfolio', label: 'Add Projects', icon: Boxes },
  { to: '/admin/addcareer', label: 'Add Career', icon: Package },
 
];

const AdminSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 h-screen left-0 w-64  bg-gray-900 text-yellow-400 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Branding */}
        <div className="flex items-center gap-2 p-4 text-2xl font-bold">
        
        <img width={150} src="public/logo/Dhanwis Logo-01 (1).png" alt="" />
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex flex-col">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center px-4 py-2.5 transition-colors ${
                isActive(to)
                  ? 'bg-yellow-500 text-white'
                  : 'text-white hover:bg-secondary'
              }`}
            >
              <Icon className="mr-2 h-5 w-5" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
