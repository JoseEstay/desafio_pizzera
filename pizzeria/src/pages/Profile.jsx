import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const {email, logout, } = useContext(UserContext);

 

  return (
 <div className="container mt-5 mb-5 d-flex justify-content-center">
      <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-4">Perfil de Usuario</h2>
          <hr />
          <p className="card-text fs-5 mt-3 mb-4">
            <strong>Email:</strong> <br />
            <span className="text-muted">{email}</span>
          </p>
          <button className="btn btn-danger w-100" onClick={logout}>
              Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}


export default Profile;

