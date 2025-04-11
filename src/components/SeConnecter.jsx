import React, { useState } from "react";
import { GraduationCap, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function SeConnecter({ isRegistering, setIsRegistering }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={`w-full `}>
      {/* Header - inside main container */}
      <div className="text-center py-6">
        <div className="flex justify-center">
          <GraduationCap className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          ISTA NTIC <span className="text-blue-500">Beni Mellal</span>
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Institut Spécialisé de Technologie Appliquée
        </p>
      </div>

      {/* Form and Buttons */}
      <div className="space-y-1">
        {/* Social Register Buttons */}
        <div className="flex flex-wrap justify-evenly space-x-4 mt-3 gap-5">
          <button className="flex-grow flex items-center space-x-2 px-4 py-2 rounded-lg border-t-gray-500 shadow-2xl shadow-gray-300 cursor-pointer hover:bg-gray-200">
            <img src="/google-icon.svg" alt="Google icon" />
            <span className="flex-grow">
              {isRegistering
                ? "Inscrivez-vous avec Google"
                : "Se connecter avec google"}
            </span>
          </button>
          <button className="flex-grow flex items-center space-x-2 px-4 py-2 rounded-lg border-t-gray-500 shadow-2xl shadow-gray-300 cursor-pointer hover:bg-gray-200">
            <img src="/microsoft-icon.svg" alt="Micosoft icon" />
            <span className="flex-grow">
              {isRegistering
                ? "Inscrivez-vous avec Google"
                : "Se connecter avec google"}
            </span>
          </button>
        </div>
        {/* Email */}
        {isRegistering && (
          <form className="mt-5 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
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
            </div>

            {/* Forgot Password */}
            <div className="flex items-center">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
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
        )}

        {/* Toggle Sign In/Register */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="cursor-pointer text-sm text-indigo-600 hover:text-indigo-500"
          >
            {isRegistering
              ? "Vous avez déjà un compte ? Se connecter"
              : "Vous n'avez pas de compte ? Inscrivez-vous"}
          </button>
        </div>
      </div>
    </div>
  );
}
