import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-white text-xl font-bold">UL</span>
          </motion.div>
          <span className="text-2xl font-bold text-gray-800">Urdu Lens</span>
        </Link>
        {/* <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
}

export default Header;

