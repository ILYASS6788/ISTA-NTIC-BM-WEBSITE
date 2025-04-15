import React, { useEffect, useState } from "react";
import SeConnecter from "../components/SeConnecter";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../sotre/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const [infos, setInfos] = useState({ name: "", email: "", password: "" });
  const {user,error, loading} = useSelector((state) =>state.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    const socialLogin = () => {
      const Params = new URLSearchParams(window.location.search);
      const logIn = Params.get("log-in");
      if (logIn === "true") {
        dispatch(loginUser({ urlApi: "user/social" }));
      }
      
    };
    socialLogin();
    console.log(error)
  },[window.location.search]);
  useEffect(() => {
    const loadingAnimation = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(loadingAnimation);
  }, []);

  if (isLoading || loading) {
    return <Loader />;
  }

  if(user){
    return navigate('/');
  }
  return (
    <>
    
      {/* Left Side - Form */}
      <SeConnecter
        isRegistering={isRegistering}
        setIsRegistering={setIsRegistering}
        infos={infos}
        setInfos={setInfos}
      />

      {/* Right Side - Responsive Image */}

      <div className="hidden p-10 md:flex w-fit items-center justify-center">
        <img
          className=" h-auto max-w-3/5"
          src="/login-register-banner.svg"
          alt="login banner"
          loading="eager"
        />
      </div>
    </>
  );
}

export default Login;
