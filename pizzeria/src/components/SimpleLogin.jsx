import {useState} from 'react';
import './SimpleLogin.css';
const SimpleLogin = () => {

    const [dataClient, setDataClient] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setDataClient((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
     
        const {password} = dataClient
        e.preventDefault()

        if (password.length < 5) {
            alert('La contraseña debe tener al menos mas de 5 caracteres');
            return;
        }
        
        alert('acceso exitoso')
        setDataClient({
            email: "",
            password: "",
        })
    }

  return (
<>
<h2>Login</h2>
<form onSubmit={handleSubmit}>
    <input type="text"
    name="email"
    value={dataClient.email}
    placeholder='Escribe tu correo'
    onChange={handleChange}
    >

    </input>
    <input type="password"
    name="password"
    value={dataClient.password}
    placeholder='Escribir contraseña'
    onChange={handleChange}
    >
    </input>
    <button type='submit'>Enviar</button>
    </form>
    </>
  )
}

export default SimpleLogin