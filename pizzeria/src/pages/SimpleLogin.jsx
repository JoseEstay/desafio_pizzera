import {useState} from 'react';
const SimpleLogin = () => {

    const [dataClient, setDataClient] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setDataClient((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
     
        const {password, confirmPassword} = dataClient
        e.preventDefault()

        if (password.length < 6) {
            alert('La contraseña debe tener al menos mas de 5 caracteres');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        
        alert('acceso exitoso')
        setDataClient({
            email: "",
            password: "",
            confirmPassword: "",
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
    <input type="password"
    name="confirmPassword"
    value={dataClient.confirmPassword}
    placeholder='Confirmar contraseña'
    onChange={handleChange}
    >
    </input>
    <button type='submit'>Enviar</button>
    </form>
    </>
  )
}


export default SimpleLogin