import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from './pages/Home'
import About from './pages/About'
import Centre from './pages/Centre'
import Spacecraft from './pages/Spacecraft'
import Launcher from './pages/Launcher'
import CustomerSatellite from './pages/CustomerSatellite'
import Spinner from './components/Spinner'

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/spacecrafts' element={<Spacecraft />} />
          <Route path='/launchers' element={<Launcher />} />
          <Route path='/customer-satellites' element={<CustomerSatellite />} />
          <Route path='/centers' element={<Centre />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
        <Footer />
      </Router>

      <Spinner />
    </>
  )
}

export default App
