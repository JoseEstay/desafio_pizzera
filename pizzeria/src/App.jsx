import Navbar from './pages/Navbar'
import Home from './pages/Home' 
import Footer from './pages/Footer'
import Cart from './pages/Cart' 
import Pizza from '../pages/Pizza'
import SimpleLogin from './pages/SimpleLogin'
import { Routes, Route } from 'react-router-dom'

function App () {

  return (
    <div>
      <Navbar />
      <Routes> 
         <Route path="/" element={<Home />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/pizza" element={<Pizza />} />
         <Route path="/login" element={<SimpleLogin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
