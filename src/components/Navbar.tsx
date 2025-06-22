import React from 'react';
import { LogIn, Flower2 } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
  onLoginClick: () => void;
  isAdmin: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onPageChange, 
  onLoginClick, 
  isAdmin, 
  onLogout 
}) => {
  const navItems = [
    { id: 'home' as PageType, label: 'Home' },
    { id: 'poojas' as PageType, label: 'Book Poojas' },
    { id: 'chadhava' as PageType, label: 'Chadhava Offering' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <Flower2 className="w-6 h-6 text-white" />
            </div>
            <h1 
              className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent cursor-pointer"
              style={{ fontFamily: 'Cinzel, serif' }}
              onClick={() => onPageChange('home')}
            >
              BhaktDwaar
            </h1>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side - Login/Admin */}
          <div className="flex items-center space-x-4">
            {isAdmin ? (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onPageChange('admin')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === 'admin'
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  Admin Panel
                </button>
                <button
                  onClick={onLogout}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;