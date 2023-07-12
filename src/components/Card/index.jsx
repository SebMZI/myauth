import React from "react";
import cardImg from "../../assets/card-img.webp";

const Card = () => {
  return (
    <div className="card">
      <img src={cardImg} alt="advise" />
      <div className="card-content">
        <p className="card-para">
          MyAuth a été un partenaire de confiance pour protéger notre entreprise
          contre les cybermenaces. Leurs solutions d'authentification
          multi-facteurs ont considérablement renforcé la sécurité de nos
          données sensibles
        </p>
        <p className="advise-name">- Madi</p>
      </div>
    </div>
  );
};

export default Card;
