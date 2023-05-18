import React, { useState } from "react";
import {
  getAuth,
  updateProfile,
  sendEmailVerification,
  updatePassword,
} from "firebase/auth";
//import { useCookies } from "react-cookie";

const Dashboard = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  // let email = user.email;
  // let photoURL = user.photoURL;
  // let emailVerified = user.emailVerified;
  // let displayName = user.displayName;
  // let uid;

  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    sendEmailVerification(auth.currentUser);
  };

  const handleChangeName = (e) => {
    e.preventDefault();
    if (!name) {
      console.log("Veuillez entrer un nom et un prénom !");
    } else {
      updateProfile(auth.currentUser, { displayName: name })
        .then(() => console.log("nom et prénom modifiéss"))
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChangePwd = (e) => {
    e.preventDefault();
    if (pwd === pwd2) {
      updatePassword(user, pwd)
        .then(() => console.log("Mot de passe Modifié"))
        .catch((err) => console.log(err));
    } else {
      console.log("Les mots de passe ne correspondent pas");
    }
  };

  return (
    <div>
      <h2>Dashboard </h2>
      <p>{user.email}</p>
      {user.emailVerified === false ? (
        <button onClick={handleVerify}>Vérifier Email</button>
      ) : (
        <p>Email Vérifié</p>
      )}
      <form onSubmit={handleChangeName}>
        <label htmlFor="name">Modifier Nom et Prénom</label>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Modifier</button>
      </form>
      <form onSubmit={handleChangePwd}>
        <label htmlFor="pwd">Modifier Mot de passe</label>
        <input
          type="password"
          id="pwd"
          onChange={(e) => setPwd(e.target.value)}
        />
        <br />
        <label htmlFor="pwd2">Confirmez Mot de passe</label>
        <input
          type="password"
          id="pwd2"
          onChange={(e) => setPwd2(e.target.value)}
        />
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default Dashboard;
