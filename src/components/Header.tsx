import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 w-full  z-50 bg-gradient-to-l from-primary-400 via-primary-200 to-primary-300 text-gray-800 py-3 px-6 shadow-md sora-header rounded-b-3xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img className="w-60 h-20" src="Insanely-removebg-preview.png" alt="Logo" />

        {/* Search Bar */}
        <div className="relative flex-grow max-w-2xl mx-8 hidden md:flex">
          <input
            type="text"
            placeholder="Search for products, categories, or brands..."
            className="w-full py-3 px-5 rounded-full shadow-inner bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-400"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-primary-600 transition-all duration-300">
            Search
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-lg font-medium">
          <a href="#" className="hover:text-primary-600 transition-colors duration-300">Men</a>
          <a href="#" className="hover:text-primary-600 transition-colors duration-300">Women</a>
          <a href="#" className="hover:text-primary-600 transition-colors duration-300">Kids</a>
          <a href="#" className="hover:text-primary-600 transition-colors duration-300">Unisex</a>
        </nav>
      </div>

      {/* Search Bar for Small Screens */}
      <div className="flex justify-center mt-4 md:hidden">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 rounded-full shadow-inner bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-400"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-primary-600 transition-all duration-300">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
