import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contactez Nous</h2>
      <form className="welcome-contact-form">
        <label htmlFor="name">Nom et Prénom</label>
        <input type="text" id="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
        <label htmlFor="uid">ID</label>
        <input type="text" id="uid" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <button type="submit" disabled className="contact-btn">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
