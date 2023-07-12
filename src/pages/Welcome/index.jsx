import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero-img.webp";
import HomeAbout from "../../components/about";
import Contact from "../../components/contact";
import Advise from "../../components/Advises";
import Services from "../../components/Services";

const Welcome = () => {
  return (
    <main className="welcome">
      <div className="welcome-hero">
        <div className="welcome-content">
          <h2 className="welcome-title">
            Bienvenue chez <span>MyAuth</span>
          </h2>
          <h3 className="welcome-subtitle">
            Votre partenaire de confiance en matière de sécurité numérique !
          </h3>
          <p className="welcome-text">
            + de 5000 entreprises nous font confiance !
          </p>
          <div className="welcome-btns">
            <Link to={"/signup"} className="btn btn-solid ">
              S'inscrire
            </Link>
            <Link to={"/login"} className="btn btn-light">
              Se connecter
            </Link>
          </div>
        </div>
        <img className="welcome-img" src={heroImg} alt="laptop" />
      </div>
      <HomeAbout />
      <Advise />
      <Services />
      <Contact />
    </main>
  );
};

export default Welcome;
