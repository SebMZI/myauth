import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import HomeAbout from "../../components/about";

function App() {
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
    return (
      <div>
        <div className="home-main">
          <h2 className="home-title">
            Bonjour
            {user.displayName ? user.displayName : " nouvel Utilisateur !"}
          </h2>
          <p className="home-subtitle">Comment allez-vous ? </p>
        </div>
        <HomeAbout />
      </div>
    );
  }
}

export default App;
