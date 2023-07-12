import React from "react";
import aboutImg from "../../assets/about-img.webp";

const HomeAbout = () => {
  return (
    <section id="about" className="welcome-about">
      <img src={aboutImg} alt="infos about" />
      <div className="about-content">
        <h2>A propos de MyAuth</h2>
        <p className="about-text para1">
          Chez MyAuth, nous sommes passionnés par la sécurité numérique et nous
          nous engageons à fournir les meilleures solutions pour protéger votre
          entreprise. Notre équipe d'experts hautement qualifiés est spécialisée
          dans le domaine de l'authentification et de la sécurité informatique,
          et nous mettons cette expertise au service de nos clients.
        </p>
        <p className="about-text para2">
          Notre approche est axée sur la personnalisation. Nous comprenons que
          chaque entreprise a des besoins et des défis uniques en matière de
          sécurité. C'est pourquoi nous travaillons en étroite collaboration
          avec nos clients pour comprendre leurs exigences spécifiques et
          proposer des solutions sur mesure adaptées à leurs besoins.
        </p>
      </div>
    </section>
  );
};

export default HomeAbout;
