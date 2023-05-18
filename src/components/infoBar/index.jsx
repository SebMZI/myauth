import React from "react";
import noUser from "../../assets/no-user.png";
import { sendEmailVerification } from "firebase/auth";

const InfoBar = ({ user, name, email, id, emailVerified }) => {
  const handleVerify = (e) => {
    e.preventDefault();
    sendEmailVerification(user);
  };

  return (
    <div className="infoBar">
      <div className="infoBar-content">
        <h3 className="infoBar-name">{name}</h3>
        <span className="infoBar-uid">ID : {id}</span>
        <div className="email-content">
          <p className="infoBar-email">{email}</p>
          {emailVerified === false ? (
            <div className="verif-email">
              <p className="emailVerif-txt">Email non vérifié !</p>
              <button onClick={handleVerify}>Vérifier Email</button>
            </div>
          ) : (
            <p className="emailVerif-txt">Email Vérifié</p>
          )}
        </div>
      </div>
      <img
        className="infoBar-img"
        src={user.photoURL ? user.photoURL : noUser}
        alt={name}
      />
    </div>
  );
};

export default InfoBar;
