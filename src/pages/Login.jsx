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
      <div className="w-full max-w-7xl h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-9 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center justify-start text-center space-y-4">
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
            <div class="flex items-center mb-4">
              <input id="default-checkbox" type="checkbox" value="" className="w-5 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-600"/>
              <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">Remember Me</label>
            </div>

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
