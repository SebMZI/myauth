import React, { useState, useEffect } from "react";
import { getApp } from "firebase/app";
import {
  updateProfile,
  updatePassword,
  getAuth,
  updateEmail,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import addImg from "../../assets/add-img.webp";

const ModifDashboard = ({ user, name }) => {
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [img, setImg] = useState(null);
  //const [urlImg, setUrlImg] = useState(null);
  const auth = getAuth();

  const handleChangeName = () => {
    if (!userName) {
      console.log("Veuillez entrer un nom et un prénom !");
    } else {
      updateProfile(auth.currentUser, { displayName: userName })
        .then(() => setNameMsg("Nom et Prénom modifiés"))
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChangeEmail = (event) => {
    event.preventDefault();
    if (!email) {
      setEmailMsg("Entrer un email !");
    } else {
      updateEmail(auth.currentUser, email)
        .then(() => setEmailMsg("Email modifié !"))
        .catch((err) => {
          console.log(err.code);
          err.code === "auth/requires-recent-login" &&
            setEmailMsg(
              "Veuillez vous reconnecter pour changer de mot de passe !"
            );
          err.code === "auth/email-already-in-use" &&
            setEmailMsg(
              "Cet email est déjà utilisé. Veuillez en choisir un autre."
            );
        });
    }
  };

  const handleChangePwd = (event) => {
    event.preventDefault();
    if (pwd === pwd2) {
      updatePassword(auth.currentUser, pwd)
        .then(() => {
          setPwdMsg("Mot de passe Modifié");
          setPwd("");
          setPwd2("");
        })
        .catch((err) => {
          console.log(err.code);
          err.code === "auth/requires-recent-login" &&
            setPwdMsg(
              "Veuillez vous reconnecter pour changer de mot de passe !"
            );
        });
    } else {
      setPwdMsg("Les mots de passe ne correspondent pas");
    }
  };

  const handleImg = async (event) => {
    event.preventDefault();
    //console.log(img);
    //const fileUrl = window.webkitURL.createObjectURL(img);
    //console.log(fileUrl);
    if (!img) {
      console.log("Veuillez ajouter une image !");
      return;
    }
    try {
      const firebaseApp = getApp();
      const storage = getStorage(
        firebaseApp,
        "gs://authproject-ef73a.appspot.com"
      );
      const storageRef = ref(storage, `${user.uid}/images/${img.name}`);
      const snapshot = await uploadBytes(storageRef, img);
      const downloadURL = await getDownloadURL(snapshot.ref);
      //console.log(downloadURL);
      //setUrlImg(downloadURL);
      await updateProfile(auth.currentUser, {
        photoURL: downloadURL,
      })
        .then(() => {
          console.log("Photo ajoutée ou modifiée");
          //window.location.reload(false);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timer;
    if (pwdMsg || nameMsg) {
      timer = setTimeout(() => {
        setPwdMsg("");
        setNameMsg("");
        setEmailMsg("");
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [pwdMsg, nameMsg, emailMsg]);

  return (
    <div className="dashboard-modif">
      <div>
        <form onSubmit={handleChangeName} className="changeName">
          <label htmlFor="name" className="dash-label">
            {!name ? "Ajouter un Nom et un Prénom" : "Modifier Nom et Prénom"}
          </label>
          <input
            id="name"
            type="text"
            onChange={(event) => setName(event.target.value)}
            className="dash-input"
          />
          <div className="dash-NameMsg">{nameMsg && <p>{nameMsg}</p>}</div>

          <button className="btn btn-solid" type="submit">
            {!name ? "Ajouter" : "Modifier"}
          </button>
        </form>

        <form onSubmit={handleChangePwd} className="changePwd">
          <label htmlFor="pwd" className="dash-label">
            Modifier Mot de passe
          </label>
          <input
            type="password"
            id="pwd"
            onChange={(event) => setPwd(event.target.value)}
            className="dash-input"
            value={pwd}
          />
          <br />
          <label htmlFor="pwd2" className="dash-label">
            Confirmer Mot de passe
          </label>
          <input
            type="password"
            id="pwd2"
            onChange={(event) => setPwd2(event.target.value)}
            className="dash-input"
            value={pwd2}
          />
          <div className="dash-msg">{pwdMsg && <p>{pwdMsg}</p>}</div>
          <button type="submit" className="btn btn-solid">
            Modifier
          </button>
        </form>
      </div>
      <dir>
        <form onSubmit={handleChangeEmail} className="changeEmail">
          <label htmlFor="email" className="dash-label">
            Modifier Email
          </label>
          <input
            type="email"
            className="dash-input"
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="dash-msg">
            <p>{emailMsg}</p>
          </div>
          <button type="submit" className="btn btn-solid">
            Modifier
          </button>
        </form>
        <form className="changeImg" onSubmit={handleImg}>
          <label htmlFor="img" className="dash-label fileImg">
            <img src={addImg} alt="Ajouter" className="addImg" />
            <p>4mo max : PNG/JPG/JPEG/GIF</p>
            <div className="btn btn-dark">Ajouter Une Image</div>
            {/* <img src={"de"} alt="preview" className="img-preview" /> */}
          </label>
          <input
            className="dash-input"
            type="file"
            accept=".png,.jpg,.jpeg,.gif"
            id="img"
            placeholder="https://www.grgergerg.com/fezfzefzefe"
            onChange={(event) => setImg(event.target.files[0])}
            size={4194304}
          />
          <button type="submit" className="btn btn-solid">
            Modifier
          </button>
        </form>
      </dir>
    </div>
  );
};

export default ModifDashboard;
