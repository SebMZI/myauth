import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homeImg from "../../assets/home-img.webp";

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
      <section className="home">
        <div className="home-main">
          <h2 className="home-title">
            Bienvenue chez <span>MyAuth</span>
          </h2>
          <button className="btn btn-acc btn-solid">
            <Link to={"/dashboard"}>Accéder à mon compte</Link>
          </button>
        </div>
        <img src={homeImg} alt="hello" />
      </section>
    );
  }
}

export default App;
