import { getAuth, deleteUser } from "firebase/auth";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const DeleteDashboard = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  const handleDelete = () => {
    const user = auth.currentUser;
    if (user) {
      if (window.confirm("Voulez-vous supprimer ce compte ?") === true) {
        deleteUser(user)
          .then(() => {
            navigate("/login");
            window.location.reload(false);
          })
          .catch((error) => {
            if (error.code === "auth/requires-recent-login") {
              removeCookie("userToken");
              navigate("/login");
            } else {
              console.log(error);
            }
          });
      } else {
        console.log("Impossible de supprimer");
      }
    }
  };

  return (
    <div className="delete-content">
      <p>Supprimer mon compte et toutes ses données !</p>
      <button onClick={handleDelete} className="delete-btn">
        Supprimer
      </button>
    </div>
  );
};

export default DeleteDashboard;
