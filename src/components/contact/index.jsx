import React from "react";
import contactImg from "../../assets/contact-img.svg";

const Contact = () => {
  return (
    <section id="contact" className="welcome-contact">
      <img
        src={contactImg}
        alt="Person with a smartphone to contact the company"
      />
      <div className="contact-content">
        <h2 className="contact-title">Contactez-Nous</h2>
        <form className="welcome-contact-form">
          <label htmlFor="name">Nom et Prénom</label>
          <input type="text" id="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
          <label htmlFor="uid">ID (Optionnel)</label>
          <input type="text" id="uid" />
          <label htmlFor="message">Message</label>
          <textarea className="message" name="message" id="message"></textarea>
          <button type="submit" disabled className="btn btn-solid">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
