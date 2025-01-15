import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-l from-primary-400 via-primary-200 to-primary-300 text-gray-800 py-2 px-4 shadow-md sora-header rounded-b-3xl font">
      <div className="flex items-center justify-between">
        <img className = "w-60 h-20" src="Insanely-removebg-preview.png" alt="Logo" />
        <nav className="flex gap-8 text-2xl  ">
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
