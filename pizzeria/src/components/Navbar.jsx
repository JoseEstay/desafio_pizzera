import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext' 
function Navbar () {
  const { total } = useContext(CartContext)
  const { token, logout } = useContext(UserContext) 

  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>Pizzería Mamma Mia!</Link>

        <div className='d-flex'>
          <Link to='/' className='btn btn-outline-light me-2'>🍕 Home</Link>
          
          {token ? (
            <>
              <Link to='/profile' className='btn btn-outline-light me-2'>🔓 Profile</Link>
              <button onClick={logout} className='btn btn-outline-light me-2'>🔒 Logout</button>
            </>
          ) : (
            <>
              <Link to='/login' className='btn btn-outline-light me-2'>🔐 Login</Link>
              <Link to='/register' className='btn btn-outline-light me-2'>🔐 Register</Link>
            </>
          )}
        </div>

        <Link to='/cart' className='btn btn-info text-white'>
          🛒 Total: ${total.toLocaleString('es-CL')}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar