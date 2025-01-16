import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-l from-primary-400 via-primary-200 to-primary-300 text-gray-800 py-8 px-6 mt-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo and About */}
        <div>
          <img
            className="w-50"
            src="Insanely-removebg-preview.png"
            alt="Logo"
          />
          <p className="text-sm">
            Your ultimate destination for fashion and lifestyle needs. Explore
            the latest trends with us.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow py-2 px-4 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-400"
            />
            <button className="py-2 px-6 bg-primary-500 text-white rounded-r-full hover:bg-primary-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Insanely. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
