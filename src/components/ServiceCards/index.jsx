import React from "react";

const ServicesCards = ({ title, description }) => {
  return (
    <div className="services-card">
      <h3 className="services-card-title">{title}</h3>
      <p className="services-card-content">{description}</p>
    </div>
  );
};

export default ServicesCards;
