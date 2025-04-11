import React, { useState } from "react";
import SeConnecter from "../components/SeConnecter";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <>
      {/* Left Side - Form */}
      <SeConnecter
        isRegistering={isRegistering}
        setIsRegistering={setIsRegistering}
      />

      {/* Right Side - Responsive Image */}
      {isRegistering && (
        <div className="hidden p-10 md:flex w-full md:w-1/2 items-center justify-center">
          <img
            className="w-full h-auto max-w-full"
            src="/login-register-banner.svg"
            alt="login banner"
          />
        </div>
      )}
    </>
  );
}

export default Login;
