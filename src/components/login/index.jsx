import React from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { useCallback } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import app from "../../firebaseSettings/base/base";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies([]);
  const [isError, setIsError] = useState(false);

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setCookie("userToken", user.accessToken);
          setIsError(false);
          console.log("userToken :" + user.accessToken);
          navigate("/home");
          window.location.reload(false);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setIsError(true);
        });
    },
    [email, password, navigate, setCookie]
    // , navigate, setCookie
  );

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Se Connecter</h2>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        id="password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="error-container">
        {isError ? (
          <p className="errorText">Email ou Mot de passe incorrect.</p>
        ) : null}
      </div>

      <button className="login-btn" type="submit">
        Se Connecter
      </button>
      <Link to={"/mot-de-passe-oublie"} className="mdp-fgt">
        Mot de passe oublié ?
      </Link>
      <p className="no-acc">
        Pas de compte ? <Link to={"/signup"}>Créer un !</Link>
      </p>
    </form>
  );
};

export default LoginForm;
