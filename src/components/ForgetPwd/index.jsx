import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const FormPwd = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState();
  const handleFgtPwd = (event) => {
    if (!email) {
      event.preventDefault();
      console.log("Entrer un email valide");
      setError(true);
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("email envoyé");
          setError(false);
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(true);
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <form onSubmit={handleFgtPwd} className="forget-form">
      <h2>Réinitialiser</h2>
      <label htmlFor="email">Email</label>
      <input type="email" onChange={(event) => setEmail(event.target.value)} />
      <div className="error-container">
        {isError ? (
          <p className="errorText">Veuillez entrer un email valide.</p>
        ) : null}
      </div>
      <button type="submit" className="reset-btn">
        Envoyer mail de réinitialisation
      </button>
    </form>
  );
};

export default FormPwd;
