import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useCallback } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
//import app from "../../firebaseSettings/base/base";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies([]);
  const [isError, setIsError] = useState(false);

  console.log(cookies);
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setCookie("userToken", user.accessToken);
          setIsError(false);
          console.log("userToken :" + user.accessToken);
          navigate("/home");
          window.location.reload(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setIsError(true);
        });
    },
    [email, password, navigate, setCookie]
  );

  return (
    <section className="login">
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="error-container">
          {isError ? (
            <p className="errorText">Email ou Mot de passe incorrect.</p>
          ) : null}
        </div>

        <button className="btn btn-dark" type="submit">
          Se Connecter
        </button>
        <Link to={"/mot-de-passe-oublie"} className="mdp-fgt">
          Mot de passe oublié ?
        </Link>
        <p className="no-acc">
          Pas de compte ? <Link to={"/signup"}>Créer un !</Link>
        </p>
        <p className="identifiant">Email : demo@my-auth.com Mdp: demo123</p>
      </form>
    </section>
  );
};

export default LoginForm;
