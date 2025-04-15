import React, { useState } from "react";
import { GraduationCap, Mail, Lock, Eye, EyeOff } from "lucide-react";
import SocialLoginBtn from "./SocialLoginBtn";

export default function SeConnecter({ isRegistering, setIsRegistering ,infos,setInfos}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 md:px-8">
      {/* Header - inside main container */}
      <div className="text-center py-4 sm:py-6">
        <div className="flex justify-center">
          <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600" />
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
          ISTA NTIC <span className="text-blue-500">Beni Mellal</span>
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-gray-600">
          Institut Spécialisé de Technologie Appliquée
        </p>
      </div>

      {/* Form and Buttons */}
      <div className="space-y-1">
        {/* Social Register Buttons */}
        <div className="flex flex-wrap items-center justify-center">
          <SocialLoginBtn isRegistering={isRegistering} SocialType={"google"} />
        </div>

        {/* Email */}
        <form className="mt-4 sm:mt-5 space-y-4 sm:space-y-6 w-full">
          <div className="space-y-3 sm:space-y-4">
            {isRegistering &&  (
              <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                name="name"
                  id="name"
                  type="text"
                  required
                  value={infos.email}
                  onChange={(e) => setInfos({ ...infos, name: e.target.value })}
                  className="block w-full pl-10 pr-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Entrez votre nom"
                />
              </div>
            </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                name="email"
                  id="email"
                  type="email"
                  required
                  value={infos.email}
                  onChange={(e) => setInfos({ ...infos, email: e.target.value })}
                  className="block w-full pl-10 pr-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Entrez votre email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={infos.password}
                  onChange={(e) =>
                    setInfos({ ...infos, password: e.target.value })
                  }
                  className="block w-full pl-10 pr-10 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Entrez votre mot de passe"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Forgot Password */}
          {!isRegistering && (
            <div className="flex items-center justify-end">
              <div className="text-xs sm:text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 sm:py-2.5 px-4 border border-transparent rounded-lg text-sm sm:text-base text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            {isRegistering ? "S'inscrire" : "Se connecter"}
          </button>
        </form>

        {/* Toggle Sign In/Register */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="cursor-pointer text-xs sm:text-sm text-indigo-600 hover:text-indigo-500"
          >
            {isRegistering
              ? "Vous avez déjà un compte ? Se connecter"
              : "Vous n'avez pas de compte ? Inscrivez-vous"}
          </button>
        </div>
      </div>
    </div>
  );
}
