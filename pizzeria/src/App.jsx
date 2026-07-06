import Navbar from './components/Navbar'
import Home from './pages/Home' 
import Footer from './components/Footer'
import Cart from './pages/Cart' 
import Pizza from './pages/Pizza'
import Login from './pages/Login'
import Register from './pages/Register'
import { Routes, Route, Navigate } from 'react-router-dom' 
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import { useContext } from 'react'
import { UserContext } from './context/UserContext' 

function App () {
  const { token } = useContext(UserContext); 

  return (
    <div>
      <Navbar />
      <Routes> 
         <Route path="/" element={<Home />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/pizza/:id" element={<Pizza />} />
         <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
         <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
         <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App