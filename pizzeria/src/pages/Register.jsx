import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const {register} = useContext(UserContext);

 const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirm) {
            alert('Todos los campos son obligatorios');
            return;
        }
       
        if (password !== confirm) { 
            alert('Las contraseñas no coinciden');
            return;
        }

        await register(email, password);
        
        setEmail("");
        setPassword("");
        setConfirm("");
    };

    return (
        <div className="container mt-5 mb-5 d-flex flex-column align-items-center">
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 w-50 mt-3">
                <input 
                    type="email"
                    className="form-control"
                    value={email}
                    placeholder='Escribe tu correo'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type="password"
                    className="form-control"
                    value={password}
                    placeholder='Escribir contraseña'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input 
                    type="password"
                    className="form-control"
                    value={confirm}
                    placeholder='Confirmar contraseña'
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                />
                <button type='submit' className="btn btn-dark">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;




