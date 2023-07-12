import React from "react";
import ServicesCards from "../ServiceCards";

const Services = () => {
  return (
    <section id="services" className="welcome-services">
      <h2 className="services-title">Nos services</h2>
      <div className="services-cards">
        <ServicesCards
          title="Authentification multi-facteurs"
          description="Vérifie l’identité grâce à plusieurs facteurs tels que les mots de passe, les codes SMS, les empreintes digitales, etc."
        />
        <ServicesCards
          title="Gestion des identités et accès"
          description="Contrôler et de gérer de manière centralisée les droits d'accès des utilisateurs à vos systèmes et applications"
        />
        <ServicesCards
          title="Protection contre le phishing"
          description="Identifie et bloque les attaques , en utilisant des techniques de détection et de prévention"
        />
        <ServicesCards
          title="Audit de sécurité"
          description="Evaluer la robustesse du réseau, identifier les vulnérabilités et recommander des mesures correctives pour renforcer votre sécurité."
        />
        <ServicesCards
          title="Sécurité des appareils mobiles"
          description="Solutions de sécurité pour protéger vos outils contre les menaces telles que les attaques réseau et les fuites de données, etc"
        />
        <ServicesCards
          title="Sensibilisation à la sécurité"
          description="Sensibilisation à la sécurité pour former vos employés aux bonnes pratiques de sécurité informatique"
        />
      </div>
    </section>
  );
};

export default Services;
