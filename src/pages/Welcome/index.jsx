import React from "react";
import { Link } from "react-router-dom";
import lock from "../../assets/lock.png";
import Contact from "../../components/contact";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-main">
        <div className="welcome-content">
          <h2 className="welcome-title">
            Bienvenue sur <span>MyAuth</span>
          </h2>
          <div>
            <Link to={"signup"} className="welcome-cta">
              S'Inscrire
            </Link>
            <Link to={"login"} className="welcome-cta-log">
              Se Connecter
            </Link>
          </div>
        </div>
        <img className="welcome-lock" src={lock} alt="lock" />
      </div>
      <Contact />
    </div>
  );
};

export default Welcome;
