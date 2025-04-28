import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-700 to-indigo-900"></div>

      {/* Sign Up Box */}
      <div className="relative bg-white/10 backdrop-blur-md shadow-lg p-6 sm:p-8 rounded-2xl w-full max-w-md sm:max-w-lg text-center border border-white/20">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://res.cloudinary.com/dsk0mhwfq/image/upload/v1740387795/Logo-transparent_shwtpl.png"
            alt="Company Logo"
            className="w-40 sm:w-48 md:w-56 h-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
        <p className="text-gray-300 text-sm mb-6">Sign up to access the Conference Room Booking System</p>

        {/* Sign Up Form */}
        <form action="#" method="POST" className="space-y-4">

          {/* Name Input */}
          <div className="relative">
            <input type="text" id="name" name="name" placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300" />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input type="email" id="email" name="email" placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300" />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input type="password" id="password" name="password" placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300" />
          </div>

          {/* Sign Up Button */}
          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
            Sign Up
          </button>
        </form>

        {/* Link to Login Page */}
        <p className="text-gray-300 text-sm mt-4">Already have an account? 
          <Link to="/login" className="text-blue-400 hover:underline">Login now</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
