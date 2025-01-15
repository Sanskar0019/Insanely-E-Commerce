import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary-100 via-primary-200 to-primary-300 text-gray-800 py-4 px-6 shadow-md sora-header rounded-b-3xl">
      <div className="flex items-center justify-between">
        <div className="flex items-left text-3xl font-extrabold tracking-wide text-primary-600">
          INSANELY
        </div>
        <nav className="flex gap-8 text-md  ">
          <a href="" className="hover:text-primary-500 transition-colors duration-300">Men</a>
          <a href="" className="hover:text-primary-500 transition-colors duration-300">Women</a>
          <a href="" className="hover:text-primary-500 transition-colors duration-300">Kids</a>
          <a href="" className="hover:text-primary-500 transition-colors duration-300">Unisex</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
