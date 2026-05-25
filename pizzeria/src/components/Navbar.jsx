function Navbar () {
  const total = 25000
  const token = false

  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>Pizzería Mamma Mia!</a>

        <div className='d-flex'>
          <button className='btn btn-outline-light me-2'>🍕 Home</button>
          {token === true
            ? (
              <div>
                <button className='btn btn-outline-light me-2'>🔓 Profile</button>
                <button className='btn btn-outline-light me-2'>🔒 Logout</button>
              </div>
              )
            : (
              <div>
                <button className='btn btn-outline-light me-2'>🔐 Login</button>
                <button className='btn btn-outline-light me-2'>🔐 Register</button>
              </div>
              )}
        </div>

        <button className='btn btn-info text-white'>
          🛒 Total: ${total.toLocaleString('es-CL')}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
