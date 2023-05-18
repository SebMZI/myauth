import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const handleLogout = () => {
    removeCookie("userToken");
    window.location.reload(false);
    <Navigate to={"/"} />;
  };

  return (
    <header>
      <h1>MyAuth</h1>
      <nav>
        <ul>
          {cookies.userToken ? (
            <ul>
              <li>
                <Link to={"/home"}>Accueil</Link>
              </li>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
