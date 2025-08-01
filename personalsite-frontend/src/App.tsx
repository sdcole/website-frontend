import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [showHomeAnimation, setShowHomeAnimation] = useState<boolean>(true);

  const makePostCall = async (): Promise<void> => {
    try {
      const response = await axios.post<number>('https://portfolio.meshservice.work/api/v1/visitor-tracker');
      const result = response.data;
      setVisitorCount(result); // Store the result in the state
    } catch (error) {
      console.error('Error fetching visitor count:', error);
    }
  };

  useEffect(() => {
    // Call the API only once when the app is first loaded
    makePostCall();
  }, []);  // Empty dependency array to call it only once on initial load
  return (
    <div className='container'>
      <Navbar />
      <div className='content-container'>
      <div className="fade-container" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home visitorCount={visitorCount} showHomeAnimation={showHomeAnimation} setShowHomeAnimation={setShowHomeAnimation}/>} />
            <Route path="/about" element={<About visitorCount={visitorCount}/>} />
            <Route path="/projects" element={<Projects visitorCount={visitorCount}/>}/>
            <Route path="/contact" element={<Contact visitorCount={visitorCount}/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </div>
    
  )
}

export default App
