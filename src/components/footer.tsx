// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto">
        {/* Your footer content goes here */}
        <p>&copy; 2023 Niftyvana. All rights reserved.</p>
        <ul className="mt-2">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
