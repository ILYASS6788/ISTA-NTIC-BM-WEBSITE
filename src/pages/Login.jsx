import React, { useState } from "react";
import { GraduationCap, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      if (password === confirmPassword) {
        console.log("Registering:", email, password);
      } else {
        alert("Passwords do not match!");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-2">
      {/* Main Container */}
      <div className="w-full max-w-7xl bg-white py-4 px-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2">
          {/* Header - inside main container */}
          <div className="text-center py-6">
            <div className="flex justify-center">
              <GraduationCap className="h-12 w-12 text-indigo-600" />
            </div>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">ISTA NTIC</h2>
            <p className="mt-1 text-sm text-gray-600">
              Institut Spécialisé de Technologie Appliquée
            </p>
          </div>

          {/* Form and Buttons */}
          <div className="space-y-1">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password (only if Registering) */}
                {isRegistering && (
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Checkbox and Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    className="w-5 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                  />
                  <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900">
                    Remember Me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                {isRegistering ? "Register" : "Sign in"}
              </button>
            </form>

            {/* Toggle Sign In/Register */}
            <div className="mt-4 text-center">
              <button
                onClick={() => setIsRegistering(!isRegistering)}
                className="cursor-pointer text-sm text-indigo-600 hover:text-indigo-500"
              >
                {isRegistering
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Register"}
              </button>
            </div>

            {/* Social Register Buttons */}
            {isRegistering && (
              <div className="flex justify-center space-x-4 mt-6">
                <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg">
                  {/* <FaGoogle className="h-5 w-5" /> */}
                  <span>Register with Google</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
                  {/* <FaMicrosoft className="h-5 w-5" /> */}
                  <span>Register with Microsoft</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Responsive Image */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
          <img
            className="w-full h-auto max-w-full"
            src="login-register-banner.svg"
            alt="login banner"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
