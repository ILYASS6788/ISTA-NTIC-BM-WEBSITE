import React, { useState } from 'react';
import { GraduationCap, Mail, Lock, Eye, EyeOff } from 'lucide-react';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <style>{`
        .checkbox-wrapper {
          --checkbox-size: 25px;
          --checkbox-color: #3b82f6; /* Tailwind's blue-500 */
          --checkbox-shadow: rgba(59, 130, 246, 0.3);
          --checkbox-border: rgba(59, 130, 246, 0.7);
          display: flex;
          align-items: center;
          position: relative;
          cursor: pointer;
          padding: 10px;
        }

        .checkbox-wrapper input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkbox-wrapper .checkmark {
          position: relative;
          width: var(--checkbox-size);
          height: var(--checkbox-size);
          border: 2px solid var(--checkbox-border);
          border-radius: 8px;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.2);
          box-shadow: 0 0 15px var(--checkbox-shadow);
          overflow: hidden;
        }

        .checkbox-wrapper .checkmark::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, var(--checkbox-color), #00ffcc);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transform: scale(0) rotate(-45deg);
        }

        .checkbox-wrapper input:checked ~ .checkmark::before {
          opacity: 1;
          transform: scale(1) rotate(0);
        }

        .checkbox-wrapper .checkmark svg {
          width: 0;
          height: 0;
          color: #1a1a1a;
          z-index: 1;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
        }

        .checkbox-wrapper input:checked ~ .checkmark svg {
          width: 18px;
          height: 18px;
          transform: rotate(360deg);
        }

        .checkbox-wrapper:hover .checkmark {
          border-color: var(--checkbox-color);
          transform: scale(1.1);
          box-shadow:
            0 0 20px var(--checkbox-shadow),
            0 0 40px var(--checkbox-shadow),
            inset 0 0 10px var(--checkbox-shadow);
        }

        .checkbox-wrapper input:checked ~ .checkmark {
          animation: pulse 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 20px var(--checkbox-shadow);
          }
          50% {
            transform: scale(0.9);
            box-shadow:
              0 0 30px var(--checkbox-shadow),
              0 0 50px var(--checkbox-shadow);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 20px var(--checkbox-shadow);
          }
        }

        .checkbox-wrapper .label {
          margin-left: 15px;
          font-family: "Segoe UI", sans-serif;
          color: var(--checkbox-color);
          font-size: 18px;
          text-shadow: 0 0 10px var(--checkbox-shadow);
          opacity: 0.9;
          transition: all 0.3s;
        }

        .checkbox-wrapper:hover .label {
          opacity: 1;
          transform: translateX(5px);
        }

        .checkbox-wrapper::after,
        .checkbox-wrapper::before {
          content: "";
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--checkbox-color);
          opacity: 0;
          transition: all 0.5s;
        }

        .checkbox-wrapper::before {
          left: -10px;
          top: 50%;
        }

        .checkbox-wrapper::after {
          right: -10px;
          top: 50%;
        }

        .checkbox-wrapper:hover::before {
          opacity: 1;
          transform: translateX(-10px);
          box-shadow: 0 0 10px var(--checkbox-color);
        }

        .checkbox-wrapper:hover::after {
          opacity: 1;
          transform: translateX(10px);
          box-shadow: 0 0 10px var(--checkbox-color);
        }
      `}</style>

      <div className="w-full max-w-7xl h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h3 className="text-2xl font-bold text-indigo-600">Welcome to ISTA NTIC</h3>
          <p className="text-gray-600">
            Join us to explore the world of technology and innovation. Your journey starts here!
          </p>
        </div>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center">
              <GraduationCap className="h-12 w-12 text-indigo-600" />
            </div>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">ISTA NTIC</h2>
            <p className="mt-2 text-sm text-gray-600">Institut Spécialisé de Technologie Appliquée</p>
          </div>

          {/* Login Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                    type={showPassword ? 'text' : 'password'}
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
                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Custom Checkbox */}
            <div className="flex items-center justify-between">
              <label className="checkbox-wrapper ml-2">
                <input id="remember-me" name="remember-me" type="checkbox" />
                <span className="checkmark">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 12l6 6L20 6"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="label text-sm">Remember me</span>
              </label>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Sign in
            </button>
          </form>

          {/* Footer */}
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Contact administration
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
