import '../../App.css';
import { Routes, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Topics from '../../Pages/About/About';
import Contact from '../Content/Resume/Resume';
const Header = () => {
    return(
    <header id="header">
        <p id="logo-text">Saebastion's Website</p>
        <ul id="nav">
            <li><Link className="text-link" to='/tournament'>Tournament</Link></li>
            <li><Link className="text-link" to ='/projects'>Projects</Link></li>
            <li><Link className="text-link" to='/about'>About</Link></li>
            <li><Link className="text-link" to='/'>Home</Link></li>


        </ul>
    </header>
);
}
export default Header;