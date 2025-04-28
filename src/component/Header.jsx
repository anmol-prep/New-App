import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#339860] shadow-md">
      <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-10">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dsk0mhwfq/image/upload/v1740387794/Logo-text-transparent_ua1hds.png"
              alt="SkillMatch Logo"
              className="h-12 sm:h-16 md:h-20 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/FindJob" className="text-white text-lg hover:underline decoration-2 underline-offset-4">Find a Job</Link>
          <Link to="/AboutUs" className="text-white text-lg hover:underline decoration-2 underline-offset-4">About Us</Link>
          <Link to="/HireTalent" className="text-white text-lg hover:underline decoration-2 underline-offset-4">Hire Talent</Link>
          <Link to="/Blog" className="text-white text-lg hover:underline decoration-2 underline-offset-4">Blog</Link>
          <Link to="/ContactUs" className="text-white text-lg hover:underline decoration-2 underline-offset-4">Contact Us</Link>
        </div>

        {/* Login/Sign Up Button */}
        <div className="hidden md:flex">
          <Link
            to="/Login"
            className="py-2 px-4 md:py-3 md:px-6 text-white text-sm md:text-lg rounded-full border shadow-lg font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Login / Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger / Cross */}
        <div className="md:hidden flex items-center justify-end">
          <button
            onClick={toggleMobileMenu}
            className={`text-white text-3xl transition-all duration-300 ease-in-out cursor-pointer ${isMobileMenuOpen ? "rotate-45" : ""}`}
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            {isMobileMenuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Slide Transition */}
      <div
        className={`md:hidden bg-[#339860] flex flex-col items-center gap-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] py-6" : "max-h-0"
        }`}
      >
        <Link to="/FindJob" className="text-white text-lg hover:underline" onClick={toggleMobileMenu}>Find a Job</Link>
        <Link to="/AboutUs" className="text-white text-lg hover:underline" onClick={toggleMobileMenu}>About Us</Link>
        <Link to="/HireTalent" className="text-white text-lg hover:underline" onClick={toggleMobileMenu}>Hire Talent</Link>
        <Link to="/Blog" className="text-white text-lg hover:underline" onClick={toggleMobileMenu}>Blog</Link>
        <Link to="/ContactUs" className="text-white text-lg hover:underline" onClick={toggleMobileMenu}>Contact Us</Link>
        <Link
          to="/Login"
          className="py-2 px-6 text-white rounded-full border shadow-md hover:bg-white hover:text-black transition duration-300"
          onClick={toggleMobileMenu}
        >
          Login / Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
