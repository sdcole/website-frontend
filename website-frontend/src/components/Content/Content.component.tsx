import '../../App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Projects from '../../Pages/Projects/Projects';
import Tournament from '../../Pages/Tournament/Tournament'

const Content = () => {
return (
  <div id="content">         
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/tournament' element={<Tournament/>} />
    </Routes>
  </div>
);
}
export default Content;