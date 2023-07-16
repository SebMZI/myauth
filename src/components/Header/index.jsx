import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getAuth, signOut } from "firebase/auth";
import burger from "../../assets/burger.webp";

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const auth = getAuth();
  const [toggle, setToggle] = useState(false);

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

  const handleMenu = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <header className="header">
      <h1 className="header-logo">MYAUTH</h1>
      <img
        className={toggle === false ? "menu-burger" : "menu-burger active"}
        src={burger}
        alt="menu-burger"
        onClick={handleMenu}
      />
      <nav
        className={
          toggle === false ? "header--nav " : "header--nav menu-active "
        }
      >
        {cookies.userToken ? (
          <ul onClick={handleMenu}>
            <li>
              <Link to={"/home"}>Accueil</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Mon Compte</Link>
            </li>
            <button className="btn btn-light" onClick={handleLogout}>
              Se déconnecter
            </button>
          </ul>
        ) : (
          <ul onClick={handleMenu}>
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>
            <li>
              <a href="#about">A Propos</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Link to={"/login"}>Se connecter</Link>
            </li>
            <button className="btn btn-light">
              <Link to={"/signup"}>S'inscrire</Link>
            </button>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
