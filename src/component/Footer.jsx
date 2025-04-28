import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; 
 // Import React Icons

const Footer = () => {
  const currentYear = new Date().getFullYear();  // Get the current year

  return (
    <footer className="bg-gray-900 text-white pt-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Brand Information */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold text-white">SkillMatch</h2>
          <p className="text-gray-400 text-sm mt-1">Your gateway to the best jobs.</p>
        </div>

        {/* Contact Section */}
        <div className="mt-4 md:mt-0 text-center md:text-left">
          <h3 className="text-lg font-medium">Contact</h3>
          <p className="text-gray-400 text-sm">Email: support@skillmatch.com</p>
          <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 md:mt-0 flex space-x-6 justify-center md:justify-start">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-700 transition duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-700 mt-6 md:mt-8"></div>

      {/* Copyright Section */}
      <div className="flex justify-center py-4">
        <p className="text-sm">
          © {currentYear} SkillMatch. All rights reserved. | Made with ❤️ by{' '}
          <span className="text-white font-medium">Anmol</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
