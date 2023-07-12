import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useCallback } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//import app from "../../firebaseSettings/base/base";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Signed in
          setIsError(false);
          navigate("/login");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setIsError(true);
        });
    },
    [email, password, navigate]
  );

  return (
    <section className="signUp">
      <form onSubmit={handleSubmit} className="signup-form">
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
          {isError ? <p className="errorText">Email invalide.</p> : null}
        </div>
        <button type="submit" className="btn btn-dark">
          Créer un compte
        </button>
        <p className="already-acc">
          Déjà un compte ? <Link to={"/login"}>Connectez-vous !</Link>
        </p>
      </form>
    </section>
  );
};

export default SignUpForm;
