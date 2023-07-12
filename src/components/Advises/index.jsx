import React from "react";
import Card from "../Card";

const Advise = () => {
  return (
    <section id="advise" className="welcome-advise">
      <h2 className="advise-title">
        Découvrez ce que nos clients satisfaits ont à dire sur leur expérience
        avec MyAuth
      </h2>
      <div className="advise-cards">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Advise;
