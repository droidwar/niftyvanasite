// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto">
        {/* Your header content goes here */}
        <h1 className="text-2xl font-semibold">Niftyvana</h1>
        <nav>
          {/* Add navigation links or menu items */}
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
