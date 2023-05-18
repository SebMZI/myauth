import { useCookies } from "react-cookie";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [cookies, setCookie] = useCookies([]);

  console.log(user);
  console.log("Ceci est le token utilisateur : " + cookies.userToken);

  return <div>Home - Private Page</div>;
}

export default App;
