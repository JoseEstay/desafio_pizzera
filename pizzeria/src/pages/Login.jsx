import { useState, useContext} from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await login(email, password);
  };
  return (
      <div className="container mt-5 mb-5 d-flex flex-column align-items-center">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 w-50 mt-3">
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className="form-control"
                placeholder='Escribe tu correo'
                required
              />
              <input 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 type='password'
                 className="form-control"
                 placeholder='Escribe tu contraseña'
                 required
              />
              <button type='submit' className="btn btn-dark">Ingresar</button>
          </form>
      </div>
    );
}

export default Login;