import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        removeCookie("userToken");
        <Navigate to={"/"} />;
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <header>
      <h1>MyAuth</h1>
      <nav>
        {cookies.userToken ? (
          <ul>
            <li>
              <Link to={"/home"}>Accueil</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Mon Compte</Link>
            </li>
            <button className="cta-btn" onClick={handleLogout}>
              Se déconnecter
            </button>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>
            <li>
              <Link to={"/login"}>Se connecter</Link>
            </li>
            <li className="cta-btn">
              <Link to={"/signup"}>Créer un compte</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
