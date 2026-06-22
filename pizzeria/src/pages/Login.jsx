import { useState } from 'react';

const Login = () => {
    const [dataClient, setDataClient] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataClient((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = dataClient;

        if (!email || !password) {
            alert('Todos los campos son obligatorios');
            return;
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }
        
        alert('Acceso exitoso');
       
        setDataClient({
            email: "",
            password: "",
        });
    };

  return (
    <div className="container mt-5 mb-5 d-flex flex-column align-items-center">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 w-50 mt-3">
            <input 
                type="email"
                name="email"
                className="form-control"
                value={dataClient.email}
                placeholder='Escribe tu correo'
                onChange={handleChange}
            />
            <input 
                type="password"
                name="password"
                className="form-control"
                value={dataClient.password}
                placeholder='Escribir contraseña'
                onChange={handleChange}
            />
            <button type='submit' className="btn btn-dark">Ingresar</button>
        </form>
    </div>
  );
};

export default Login;