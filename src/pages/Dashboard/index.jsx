import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import InfoBar from "../../components/infoBar";
import ModifDashboard from "../../components/modif";
import DeleteDashboard from "../../components/Delete";
//import { useCookies } from "react-cookie";

const Dashboard = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  if (user) {
    let email = user.email;
    let photoURL = user.photoURL;
    let emailVerified = user.emailVerified;
    let displayName = user.displayName;
    let uid = user.uid;
    console.log(email, photoURL, emailVerified, displayName, uid);

    return (
      <div className="dashboard">
        <h2 className="dashboard-title">Mon Compte </h2>
        <InfoBar
          user={user}
          name={displayName}
          id={uid}
          email={email}
          photo={photoURL}
          emailVerified={emailVerified}
        />
        <div className="dashboard-content">
          <ModifDashboard user={user} name={displayName} photo={photoURL} />
          <DeleteDashboard user={user} />
        </div>
      </div>
    );
  }
};

export default Dashboard;
