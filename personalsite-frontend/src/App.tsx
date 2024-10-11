import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Navbar />
      <div className='content-container'>
        <div className='page-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </div>
    
  )
}

export default App
