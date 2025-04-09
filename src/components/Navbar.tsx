import React from 'react';
import { ShoppingCart, Home, Phone, Store, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center">
              <Store className="h-6 w-6 text-indigo-600" />
              <span className="ml-2 font-bold text-xl">ShopHub</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/'
                    ? 'text-indigo-600'
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <Link
                to="/shop"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/shop'
                    ? 'text-indigo-600'
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                <Store className="h-4 w-4 mr-1" />
                Shop
              </Link>
              <Link
                to="/contact"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/contact'
                    ? 'text-indigo-600'
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                <Phone className="h-4 w-4 mr-1" />
                Contact
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-indigo-600"
            >
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link
              to="/login"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-indigo-600"
            >
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}