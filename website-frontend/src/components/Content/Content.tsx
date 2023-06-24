import '../../App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Tournament from './TournamentPage/Tournament'

const Content = () => {
return (
  <div id="content">         
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/tournament' element={<Tournament/>} />
    </Routes>
  </div>
);
}
export default Content;