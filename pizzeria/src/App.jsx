import Navbar from './components/Navbar'
import Home from './pages/Home' 
import Footer from './components/Footer'
import Cart from './pages/Cart' 
import Pizza from './pages/Pizza'
import Login from './pages/Login'
import Register from './pages/Register'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

function App () {

  return (
    <div>
      <Navbar />
      <Routes> 
         <Route path="/" element={<Home />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/pizza" element={<Pizza />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
