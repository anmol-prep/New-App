import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-700 to-indigo-900"></div>

      {/* Login Box */}
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
        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
        <p className="text-gray-300 text-sm mb-6">Login to access the Conference Room Booking System</p>

        {/* Login Form */}
        <form action="#" method="POST" className="space-y-4">

          {/* Email Input */}
          <div className="relative">
            <input type="email" id="email" name="email" placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300" />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input type="password" id="password" name="password" placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300" />
            <button type="button" onClick="togglePassword()" className="absolute right-3 top-3 text-gray-400 hover:text-white cursor-pointer">
              👁
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-300">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="hover:underline text-blue-400">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-gray-300 text-sm mt-4">Don't have an account? 
          <Link to="/signup" className="text-blue-400 hover:underline">Create now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
