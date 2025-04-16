import React, { useEffect, useState } from "react";
import SeConnecter from "../components/SeConnecter";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../sotre/slices/AuthSlice";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";

export default function Login() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [ErrorMesg, setErrorMsg] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [infos, setInfos] = useState({ name: "", email: "", password: "" });
  const { user, error, loading ,role} = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
      const Params = new URLSearchParams(location.search);
      const logInparam = Params.get("log-in");
      const Error_param = Params.get("error");
      console.log(logInparam)

      if (logInparam === "true") {
        dispatch(loginUser({ urlApi: "user/social" }));
      }
      if (logInparam === "failed") {
        setErrorMsg("Échec de l'authentification, veuillez réessayer.");
      }
      if (Error_param === "NotFound") {
        setErrorMsg("Impossible de récupérer l'adresse e-mail depuis Google.");
      }
    
  }, [location.search]);

  useEffect(() => {
    const loadingAnimation = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(loadingAnimation);
  }, []);

 
  useEffect(() => {
    setErrorMsg(error || null)
  }, [error]);

  if (isLoading || loading) {
    return <Loader />;
  }

  if (user) {
    role === 'admin' ? navigate("/dashboard/events") : navigate('/');
    return null; 
  }

  return (
    <>
      <ErrorAlert message={ErrorMesg} onClose={() => setErrorMsg(null)} />

      <SeConnecter
        isRegistering={isRegistering}
        setIsRegistering={setIsRegistering}
        infos={infos}
        setInfos={setInfos}
      />

      <div className="hidden p-10 md:flex min-w-96 items-center justify-center">
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

